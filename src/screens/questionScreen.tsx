import { Authenticator } from '@aws-amplify/ui-react';
import { useAppDispatch } from "../store/hooks"
import {components} from '../services/components'
import { userLogout } from '../actions/userActions';
import { useEffect,  useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { get } from 'aws-amplify/api';
import { fetchAuthSession } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

function QuestionScreen() {
  const dispatch = useAppDispatch()
  const[show,setShow]=useState(false)
  const navigate=useNavigate()

  Hub.listen('auth', (data) => {
    if(!show && data) setShow(true)
  });

  //DB connections: 
  //step 0 - List (current user and program) question items (show some default until loading)
  //step final - Define next question (function or AI)  
  //             Create new userData
  //             Update user (current userProgram status - next question)
  //Remove items and return to step 0 

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
          <button onClick={()=>navigate('/CourseMap1')}>Map1 Screen</button>
        </main>
      )}
    </Authenticator>
  );
}

export default QuestionScreen