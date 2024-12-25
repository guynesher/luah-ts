import { get } from 'aws-amplify/api';
import { fetchAuthSession } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../amplify/data/resource'
import { CHAPTERS } from '../constants/program0101';

const client = generateClient<Schema>();

export default async function getFromRestAPI(params:any) {
    try {
      const session = await fetchAuthSession();
      const token = session.tokens?.idToken?.toString()
      const Auth: string=  token!;
        //console.log(params)
      const restOperation = get({ 
          apiName: 'luah-ts-api',
          path: 'cognito-auth-path',
          options: {
            headers: {Authorization:Auth},
            queryParams:params,
          },
        });
        const { body } = await restOperation.response;
         return await body.json();
      } catch (error) {
        return error;
      }
    }

export async function createUserWithAdressAndPrograms(params:string[]) { //[cognitoUserName,email,computerIP,profileNumber
    async function getItems() {              //username,surname,phone,picture,street,house,appartment,city,zipcode,...PROGRAMS]
        const up:string[]=[]
        for (let i = 13; i < params.length; i++) {
          up.push(params[3]+params[0]+params[i]);
        }
        const user = await client.models.User.create({
            userId: params[3]+params[0], //Can have more than one profile
            email: params[1],
            cognitoUserName: params[0],
            isAdmin: false, 
            sessionStart: Date.now(), 
            computerIP: params[2],
            userPrograms: up, 
            cards:[],
            name: params[4],surname: params[5],picture: params[7],phone: params[6],
        }).catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))

        if (user?.data?.userId) await client.models.Adress.create({
          userId:user?.data?.userId,
          street: params[8],
          house: params[9],
          appartment: params[10],
          city: params[11],
          zipcode: params[12],
        })
            .catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))
        for (let index = 13; index < params.length; index++) {
            if (user?.data?.email) await client.models.UserProgram.create({
                userProgramId: params[3]+params[0]+params[index],
                programName: params[index], 
                isOpen: false,
                expiredAt: Date.now(),
                treasure: 0,
                chapterAverage: 100,
                email:user?.data?.email,
                currentStatus: JSON.stringify(CHAPTERS[0]), //need to be changed for another PROGRAM
                nextQuestion: JSON.stringify(CHAPTERS[0]),  //need to be changed for another PROGRAM
            })
            .catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))
        }

    }
    getItems()
}

export async function updateUserWithAdress(params:string[]) { //[cognitoUserName,email,computerIP,profileNumber
  async function getItems() {              //username,surname,phone,picture,street,house,appartment,city,zipcode,...PROGRAMS]
      const up:string[]=[]
      for (let i = 13; i < params.length; i++) {
        up.push(params[3]+params[0]+params[i]);
      }//console.log(params)
      const user = await client.models.User.update({
          userId: params[3]+params[0], //Can have more than one profile
          email: params[1],
          cognitoUserName: params[0],
          isAdmin: false, 
          sessionStart: Date.now(), 
          computerIP: params[2],
          userPrograms: up, 
          name: params[4],surname: params[5],picture: params[7],phone: params[6],
      }).catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))

      if (user?.data?.userId) await client.models.Adress.update({
        userId:user?.data?.userId,
        street: params[8],
        house: params[9],
        appartment: params[10],
        city: params[11],
        zipcode: params[12],
      })
          .catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))
  }
  getItems()
}

export async function updateUserPrograms(params:string[]) { //[userProgramId,maxChpaterIndex,askedChapterIndex,data]
  async function getItems() {   
    await client.models.UserProgram.update({
          userProgramId: params[0],
          currentStatus: params[1],
          nextQuestion: params[2],
          treasure: Number(params[3]),
          chapterAverage: Math.floor(Number(params[4])),
      }).catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))
  }
  getItems()
}

export async function updateUserData(params:string[],data:any[],precent:number) { //[userId,questionId,userStatus,nextQuestion],data
  async function getItems() {   
    await client.models.UserData.create({
      userDataId: params[0]+params[1]+(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000).toString(),    
      userId: params[0],
      questionId: params[1], 
      answer: JSON.stringify(data),
      precent: precent,
      userStatus: params[2],
      nextQuestion: params[3],
      }).catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))
  }
  getItems()
}