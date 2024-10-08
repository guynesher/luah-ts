import { Authenticator, Image } from '@aws-amplify/ui-react';
import { useAppDispatch } from "../store/hooks"
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
import {components} from './components'

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
import { userLogout } from '../actions/userActions';
import { useEffect,  useState} from 'react';
import { getUrl } from 'aws-amplify/storage';
import { Hub } from 'aws-amplify/utils';
import { get } from 'aws-amplify/api';
import { fetchAuthSession } from 'aws-amplify/auth';

function Login() {
  const dispatch = useAppDispatch()
  const[fileURL,setFileURL]=useState("")
  const[show,setShow]=useState(false)
  
  Hub.listen('auth', (data) => {
    if(!show && data) setShow(true)
  });

  useEffect(() => {
    async function setURLs(){
    const linkToStorageFile = await getUrl({
      path: "global/Logo.png",
      // Alternatively, path: ({identityId}) => `album/{identityId}/1.jpg`
    });
    //console.log('signed URL: ', linkToStorageFile.url.toString());
    setFileURL(linkToStorageFile.url.toString())
    //console.log('URL expires at: ', linkToStorageFile.expiresAt);
    }
    setURLs()
  }, [dispatch])

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
          <Image
            alt="Luah logo"
            src={fileURL}
            objectFit="initial"
            objectPosition="50% 50%"
            backgroundColor="initial"
            height="20%"
            width="20%"
            opacity="100%"
            onClick={() => alert('📸 Say cheese!')}
          />
          <a href={fileURL} target="_blank" rel="noreferrer">
            {fileURL} 
          </a>
          <button onClick={()=>dispatch(userLogout())}>Sign out </button>
        </main>
      )}
    </Authenticator>
  );
}

export default Login