import { Authenticator } from '@aws-amplify/ui-react';
import { useAppDispatch } from "../store/hooks"
import {components} from '../services/components'
import { userLogout } from '../actions/userActions';
import { useEffect,  useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
import { createUserWithAdressAndPrograms } from '../actions/usersActions';
import { Header } from '../components/Header';
import { AuthUtils } from '../components/AuthUtils';
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
  const [ip, setIp] = useState<string>()

  Hub.listen('auth', (data) => {
    if(!show && data.payload.event==="signedIn") {
      setShow(true) 
    }
    if(!show && data.payload.event==="signedOut") {
      setShow(false) 
    }
  });

  useEffect(() => {
    if(!ip) getIp()
  }, [ip])

  const getIp = async () => {
    const response = await fetch("https://ipapi.co/json/")
    const data = await response.json()
    setIp(data.ip)
  }

  //DB connections: 
  //Listen to current user changes + get user




  // useEffect(() => {
  //   if(show)  getFromRestAPI()
  // }, [show])
  
  const params:string[]=[
    "73542832-4021-70e3-063a-86b143392525",
    "guynesher2000@gmail.com",
    ip?ip:"?",
    "1", //Profile Number
    "252b1d21-8edb-471c-8d0f-600bcecfb2c5",
    "b8eb0d56-8495-479e-ba07-ad4cd5e7b08c"
  ]

  return (
    <Authenticator components={components}>
      {({user}) => (
        <main>
          <AuthUtils email={user?.signInDetails?.loginId} user={user?.userId}></AuthUtils>
          <Header></Header>
          <h1>Hello {user?.signInDetails?.loginId}</h1>
          <button onClick={()=>dispatch(userLogout())}>Sign out </button>
          <button onClick={()=>createUserWithAdressAndPrograms(params)}>createUserWithAdressAndPrograms </button>
          <button onClick={()=>navigate('/CourseMap1')}>Map1 Screen</button>
          <button onClick={()=>navigate('/CourseMap2')}>Map2 Screen</button>
          <button onClick={()=>navigate('/Admin')}>Admin Screen</button>
        </main> 
      )}
    </Authenticator>
  );
}

export default CoursesScreen