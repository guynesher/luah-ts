import { Authenticator } from '@aws-amplify/ui-react';
import { useAppDispatch } from "../store/hooks"
import {components} from '../services/components'
import { userLogout } from '../actions/userActions';
import { useEffect,  useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { get } from 'aws-amplify/api';
import { fetchAuthSession } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

function AdminScreen() {
  const dispatch = useAppDispatch()
  const[show,setShow]=useState(false)
  const navigate=useNavigate()

  Hub.listen('auth', (data) => {
    if(!show && data) setShow(true)
  });

  //DB connections: 
  //Listen to current user changes + get user
  //check user.isAdmin? CRUD all DB : navigate(/Courses) 
  //Recheck in lambda if user belongs to "Admin" group !!!
  
  useEffect(() => {
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
    if(show) getItem()
  }, [show])
  
  return (
    <Authenticator components={components}>
      {({user }) => (
        <main>
          <h1>Hello {user?.signInDetails?.loginId}</h1>
          <button onClick={()=>dispatch(userLogout())}>Sign out </button>
          <button onClick={()=>navigate('/Courses')}>Courses Screen</button>
        </main>
      )}
    </Authenticator>
  );
}

export default AdminScreen