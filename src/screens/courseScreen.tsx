import { Authenticator } from '@aws-amplify/ui-react';
import { useAppDispatch } from "../store/hooks"
import {components} from '../services/components'
import { userLogout } from '../actions/userActions';
import { useEffect,  useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { get } from 'aws-amplify/api';
import { fetchAuthSession } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
I18n.putVocabularies(translations);
I18n.setLanguage('he');
I18n.putVocabularies({
  he: {
    'Sign In': 'התחבר',
    'Sign Up': "צור משתמש",
    'Enter your Password': 'הכנס סיסמא',
    'Please confirm your Password': 'בבקשה אשר את הסיסמא',
    'Enter your email': ' הכנס את המייל שלך',
    'Reset your password': 'אפס סיסמא',
    'Reset your Password': 'אפס סיסמא',
    'We Emailed You': 'שלחנו לך קוד',
    'Your code is on the way. To log in, enter the code we emailed to':
    'שלחנו לך קוד. כדי להכנס, הכנס את הקוד ששלחנו לך ל',
    'It may take a minute to arrive': 'זה יכול לקחת כמה דקות',
    'Code *': 'קוד',
    'New Password': 'סיסמא חדשה',
    'Reset Password': 'אפס סיסמא',
  },
});
function CoursesScreen() {
  const dispatch = useAppDispatch()
  const[show,setShow]=useState(false)
  const navigate=useNavigate()

  Hub.listen('auth', (data) => {
    if(!show && data) setShow(true)
  });

  //DB connections: 
  //Listen to current user changes + get user


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
          <button onClick={()=>navigate('/CourseMap2')}>Map2 Screen</button>
          <button onClick={()=>navigate('/Admin')}>Admin Screen</button>
        </main>
      )}
    </Authenticator>
  );
}

export default CoursesScreen