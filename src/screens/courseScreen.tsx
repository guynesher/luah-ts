import { Authenticator, Card, Flex, Grid, Text } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from "../store/hooks"
import {components} from '../services/components'
import { useEffect, useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
import { Header } from '../components/Header';
import { AuthUtils } from '../components/AuthUtils';
import { selectAudio, setAudio } from '../reducers/misSlice';
import LottieCard from '../components/lottieCard';
import { selectPrograms } from '../reducers/userSlice';
import { PROGRAMS } from '../constants/userConstants';
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
  const audio = useAppSelector(selectAudio)
  const [value, setValue] = useState<string>();
  const lsPrograms = useAppSelector(selectPrograms)

  Hub.listen('auth', (data) => {
    if(!show && data.payload.event==="signedIn") {
      setShow(true) 
    }
    if(!show && data.payload.event==="signedOut") {
      setShow(false) 
    }
  });
 
  window.onclick = function() {if(!audio){dispatch(setAudio(true))}}       
  
  useEffect(() => {
    if(value==="Program0101" && !lsPrograms.find((prog) => prog.programName===PROGRAMS[0])?.isOpen) navigate('/CourseMap1')
    if(value==="Program0102" && lsPrograms.find((prog) => prog.programName===PROGRAMS[1])?.isOpen) navigate('/CourseMap2')
    //if(value==="Program0101" && !lsPrograms.find((prog) => prog.programName===PROGRAMS[0])?.isOpen) navigate('/Morning1')
    //if(value==="Program0102" && !lsPrograms.find((prog) => prog.programName===PROGRAMS[1])?.isOpen) navigate('/Morning2')
}, [value])
  //DB connections: 
  //Listen to current user changes + get user 
  return (
    <Authenticator components={components}>
      {({user}) => (
        <Flex direction={"column"}>
          <AuthUtils email={user?.signInDetails?.loginId} user={user?.userId}/>
          <Header></Header>
          <Grid
          columnGap="0.5rem"
          rowGap="0.5rem"
          templateColumns="1fr 1fr 1fr"
          templateRows="1fr 3fr 1fr"
        >
          <Card 
            columnStart="1"
            columnEnd="-1"
            backgroundColor="orange.20"
          >
            <Text     
              variation="primary"
              as="p"
              lineHeight="1.5em"
              fontWeight={400}
              fontSize="2em"
              fontStyle="normal"
              textDecoration="none"
              width="70vw"
              color={"purple.100"}>
                   תוכניות הלימוד
            </Text>
            <Flex direction={{ base: 'column', medium: 'row' }} gap="medium" margin="40px">
          <LottieCard name="Program0101" data="Program0101" audioData="Program0101" segments={[0,120,10,80,0,120]} 
                width="50%" height="50%" price='50 ש"ח' 
              mainText='קורס קריאה הכנה לכיתה א לילדים שאוהבים ללמוד בכיף' setValue={setValue}/>
          <LottieCard name="Program0102" data="Program0102" audioData="logo" segments={[0,52,64,139,0,52]} 
                width="50%" height="50%" price='בקרוב !!!' 
              mainText='קורס חשבון הכנה לכיתה א לילדים שקצת מפחדים מחשבון' setValue={setValue}/>
          <LottieCard name="takyHP" data="takyHP" audioData="takyHP" segments={[10,80,80,120,0,120]} 
                width="50%" height="50%" price='בקרוב !!!' 
              mainText='קורס משולב גם חשבון וגם קריאה' setValue={setValue}/>
          </Flex>
          </Card>
          </Grid>
          {/* <div className='hp-button' style={{width: "30%", height: "30%", right: "50%", top: "10%"}}>
            <div className='lottieButton'>
              <ZipLottieSound loop={false} autoplay={true} data={"logo"} 
                    isAudio={[true,true,true]} 
                    segments={[0,40,0,40,0,40]} name={"logo"} 
                    audioData={"logo"}/>
            </div>
          </div> */}
        </Flex> 
      )}
    </Authenticator>
  );
}

export default CoursesScreen