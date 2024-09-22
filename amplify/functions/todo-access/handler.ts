import type { APIGatewayProxyHandler } from "aws-lambda";
import { env } from '$amplify/env/todo-access';

import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import { Schema } from '../../data/resource';
import { getAdress, getUser, getUserByEmail, getUserProgram, listTodos } from "./graphql/queries";
import { createAdress, createUser, createUserProgram } from "./graphql/mutations";


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