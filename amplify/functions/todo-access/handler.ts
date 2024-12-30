import type { APIGatewayProxyHandler } from "aws-lambda";
import { env } from '$amplify/env/todo-access';

import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../data/resource';
import { getAdress, getUserByEmail, getUserProgram, listItemsByQuestionId } from "./graphql/queries";
import { createAdress, createUser, createUserProgram, updateUserProgram } from "./graphql/mutations";
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.APIURL, // replace with your defineData name
        region: env.AWS_REGION,
        defaultAuthMode: 'identityPool'
      }
    }
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const dataClient = generateClient<Schema>();
const sesClient = new SESClient({ region: env.AWS_REGION });
type Message = {
  subject: string;
  body: string;
  recipient: string;
};

export const handler: APIGatewayProxyHandler = async (event) => {
  
  // const res = await dataClient.graphql({
  //   query: listTodos,
  // });

  let a=event.queryStringParameters?event.queryStringParameters:"NA";
  let params=[];
  for (const [key, value] of Object.entries(a)) {
    params.push(value); 
  }
  let res:any ={}
  let res1:any ={}
  let res2:any ={}
  let res3:any =[]

  //Send Email
  const sendEmail = async (message: Message) => {
    const { recipient, subject, body } = message;
  
    const command = new SendEmailCommand({
      Source: "info.luah@gmail.com",
      Destination: {
        ToAddresses: [recipient]
      },
      Message: {
        Body: {
          Text: { Data: body }
        },
        Subject: { Data: subject }
      }
    });
  
    try {
      const result = await sesClient.send(command);
      console.log(`Email sent to ${recipient}: ${result.MessageId}`);
    } catch (error) {
      console.error(`Error sending email to ${recipient}: ${error}`);
      throw new Error(`Failed to send email to ${recipient}`, { cause: error });
    }
  };
  if(params[0]==="sendEmail") res="good"
  // res = await sendEmail({
  //   recipient:"guynesher2000@gmail.com", subject: "very nice", body:"very nice" 
  // }) 

  //Get User
          //params=["listUsersbyEmail",eml,usr,lsProfile.currentProfileNumber,ip?ip:"?",
          //"252b1d21-8edb-471c-8d0f-600bcecfb2c5","b8eb0d56-8495-479e-ba07-ad4cd5e7b08c"]
  if(params[0]==="listUsersbyEmail") res = await dataClient.graphql({ 
    query: getUserByEmail,
    variables: {
      email: params[1]?params[1]:"NA",
    }
  }).catch((error)=>{return error})
  //GetAdress
  if(Object.keys(res.data.getUserByEmail.items).length>0) res2 = await dataClient.graphql({ 
    query: getAdress, 
    variables: {
      userId: (params[3]&&params[2])?params[3]+params[2]:"NA",
    }
  }).catch((error)=>{return error})
  //Get UserPrograms
  if(Object.keys(res.data.getUserByEmail.items).length>0) {
    for (let index = 5; index < params.length; index++) {
      res3.push(
        await dataClient.graphql({
        query: getUserProgram,
        variables: {
          userProgramId: (params[3]&&params[2]&&params[index])?params[3]+params[2]+params[index]:"",
        }
      }).catch((error)=>{return error})
      )
    }
  }

    //Update UserPrograms
    if(params[0]==="listItems") res = await dataClient.graphql({ 
      query: listItemsByQuestionId,
      variables: {
        questionId: params[1]?params[1]:"NA",
      },
    }).catch((error)=>{return error})

  //Update UserPrograms
  if(params[0]==="updateUserPrograms") res = await dataClient.graphql({ 
    query: updateUserProgram,
    variables: {
      input: {
        userProgramId: params[1]?params[1]:"NA",
        currentStatus: params[2]?params[2]:"NA",
        nextQuestion: params[3]?params[3]:"NA",
      }
    },
    authMode: 'apiKey',
    authToken: event.headers.Authorization,
  }).catch((error)=>{return error})

  //Create User
  if(params[0]==="createUser") {
    res1 = await dataClient.graphql({
      query: createUser,
      variables: {
        input: {
          userId: (params[3]&&params[2])?params[3]+params[2]:"", 
          email: params[1],
          cognitoUserName: params[2],
          isAdmin: false, 
          sessionStart: Date.now(), 
          computerIP: params[4],
          userPrograms: (params[5]&&params[6])?[params[5],params[6]]:[], 
      }}
    }).catch((error)=>{return error})

  //Create Adress
    res2=await dataClient.graphql({
      query: createAdress,
      variables: {
        input: {
          userId: (params[3]&&params[2])?params[3]+params[2]:"", 
      }}
    }).catch((error)=>{return error})

  //Create UserPrograms
  for (let index = 5; index < params.length; index++) {
      res3.push(
        await dataClient.graphql({
        query: createUserProgram,
        variables: {
          input: {
            userProgramId: (params[3]&&params[2]&&params[index])?params[3]+params[2]+params[index]:"",
            programName: params[index], 
            isOpen: false,
            expiredAt: Date.now(),
            treasure: 0,
            chapterAverage: 100,
            email:params[1]
        }}
      }).catch((error)=>{return error})
    )
  }
}

  return {
    statusCode: 200,
    // Modify the CORS settings below to match your specific requirements
    headers: {
      "Access-Control-Allow-Origin": "*", // Restrict this to domains you trust
      "Access-Control-Allow-Headers": "*", // Specify only the headers you need to allow
    },
    body: JSON.stringify({res:res,res1:res1,res2:res2,res3:res3,event:event,params:params}),
  };
};