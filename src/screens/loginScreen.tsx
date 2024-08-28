import { Authenticator, Image } from '@aws-amplify/ui-react';
import { useAppDispatch } from "../store/hooks"
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
import {components} from '../services/components'

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


function Login() {
  const dispatch = useAppDispatch()
  const[fileURL,setFileURL]=useState("")

  useEffect(() => {
    async function setURLs(){
    const linkToStorageFile = await getUrl({
      path: "public/media/Logo.png",
      // Alternatively, path: ({identityId}) => `album/{identityId}/1.jpg`
    });
    console.log('signed URL: ', linkToStorageFile.url.toString());
    setFileURL(linkToStorageFile.url.toString())
    console.log('URL expires at: ', linkToStorageFile.expiresAt);
  }
  setURLs()
}, [dispatch])

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