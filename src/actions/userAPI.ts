import { get } from 'aws-amplify/api';
import { fetchAuthSession } from 'aws-amplify/auth';


export const fetchUser = (name = "1") => {
  return new Promise<{ data: string }>(resolve =>
    setTimeout(() => resolve({ data: name} ), 500),
  )
}

export const fetchData = (params = {1:"1"}) => {
 return new Promise<{ data: any }>(resolve => 
   {
      async function getItem() {
        try {
          const session = await fetchAuthSession();
          const token = session.tokens?.idToken?.toString()
          const Auth: string=  token!;
    
          const restOperation = get({ 
              apiName: 'luah-ts-api',
              path: 'cognito-auth-path',
              options: {
                headers: {Authorization:Auth},
                body: params,
              },
            });
            const { body } = await restOperation.response;
            console.log (await body.json());
          } catch (error) {
            console.log('GET call failed: ',error);
          }
        }
       resolve({ data: {params: params,ret:getItem()}})
      }
  )
}

