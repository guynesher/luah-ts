// A mock function to mimic making an async request for data
import { get } from 'aws-amplify/api';
import { fetchAuthSession } from 'aws-amplify/auth';

export const fetchCount = (amount = "1") => {
  return new Promise<{ data: string }>(resolve =>
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
              },
            });
            const { body } = await restOperation.response;
            console.log('GET call succeeded: ', await body.json());
          } catch (error) {
            console.log('GET call failed: ',error);
          }
        }
        getItem()
      resolve({ data: amount })
    }
  )
}

export const fetchCountAsync = (amount = "1") => {
  return new Promise<{ data: string }>(resolve =>
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
              },
            });
            const { body } = await restOperation.response;
            console.log('GET call succeeded: ', await body.json());
          } catch (error) {
            console.log('GET call failed: ',error);
          }
        }
        getItem()
      resolve({ data: amount })
    }
  )
}
