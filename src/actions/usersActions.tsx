import { get } from 'aws-amplify/api';
import { fetchAuthSession } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../amplify/data/resource'

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

export async function createUserWithAdressAndPrograms(parmas:string[]) { //[cognitoUserName,email,computerIP,profileNumber,...programIds]
    async function getItems() {
        const up:string[]=[]
        for (let i = 4; i < parmas.length; i++) {
          up.push(parmas[3]+parmas[0]+parmas[i]);
        }
        const user = await client.models.User.create({
            userId: parmas[3]+parmas[0], //Can have more than one profile
            email: parmas[1],
            cognitoUserName: parmas[0],
            isAdmin: false, 
            sessionStart: Date.now(), 
            computerIP: parmas[2],
            userPrograms: up, 
        }).catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))

        if (user?.data?.userId) await client.models.Adress.create({userId:user?.data?.userId,})
            .catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))
        for (let index = 4; index < parmas.length; index++) {
            if (user?.data?.email) await client.models.UserProgram.create({
                userProgramId: parmas[3]+parmas[0]+parmas[index],
                programName: parmas[index], 
                isOpen: false,
                expiredAt: Date.now(),
                treasure: 0,
                email:user?.data?.email
            })
            .catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))
        }

    }
    getItems()
}

