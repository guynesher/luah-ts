import { Authenticator } from '@aws-amplify/ui-react';
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


function Login() {
  const dispatch = useAppDispatch()
  
  return (
    <Authenticator components={components}>
      {({user }) => (
        <main>
          <h1>Hello {user?.signInDetails?.loginId}</h1>
          <button onClick={()=>dispatch(userLogout())}>Sign out </button>
        </main>
      )}
    </Authenticator>
  );
}

export default Login