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
import { getPrograms, selectPrograms } from '../reducers/userSlice';
import { PROGRAMS } from '../constants/userConstants';
import { userLogout } from '../actions/userActions';
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
//import { generateClient } from 'aws-amplify/data';
//import { type Schema } from '../../amplify/data/resource'

//const client = generateClient<Schema>();

function CoursesScreen() {
  const dispatch = useAppDispatch()
  const[show,setShow]=useState(false)
  const navigate=useNavigate()
  const audio = useAppSelector(selectAudio)
  const [value, setValue] = useState<string>();
  const [curUP, setCurUp] = useState<string>("");
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
    let currentUP=lsPrograms.find((prog) => prog?.programName===PROGRAMS[0])
    if(value==="Program0102") currentUP=lsPrograms.find((prog) => prog.programName===PROGRAMS[1])
    if(value && currentUP) {
      dispatch(getPrograms(currentUP?.userProgramId))
      if(value==="Program0101" && currentUP?.isOpen) navigate('/CourseMap1')
      if(value==="Program0102" && currentUP?.isOpen) navigate('/CourseMap2')
      if(!currentUP?.isOpen) setCurUp(currentUP?.userProgramId)
    }
    setValue("")
}, [value])

useEffect(() => {
  if(curUP!=="") setTimeout(function() {
    dispatch(userLogout())
  }, 30000); 
}, [value])
  //DB connections: 
  //If current user open status was changed - Change the price to "OPEN" in GREEN
  //when moving to billing update UserProgram expiredAt=100
  //Listen to UserProgram update event - see change of color!!! 

  //Lambda Function after billing:
  //list UserProgramByEamil 
  //match data last changed UserProgram ()
  //update active UserProgram --> expiredAt=now+1 year , isOpen=true
  //update Order by details (extract userId from userProgramID)
  
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
            <Flex direction={'row'} gap="medium"  
                 width="100%" 
                 wrap={"wrap"} 
                 justifyContent="center"
                 alignItems="center">
          <LottieCard name="Program0101" data="Program0101" audioData="Program0101" segments={[0,120,10,80,0,120]} 
                width="50%" height="50%" price='50 ש"ח' isOpen={lsPrograms.find(prog=>prog?.programName===PROGRAMS[0])?.isOpen}
              mainText='קורס קריאה הכנה לכיתה א לילדים שאוהבים ללמוד בכיף' setValue={setValue}/>
          <LottieCard name="Program0102" data="Program0102" audioData="logo" segments={[0,52,64,139,0,52]} 
                width="50%" height="50%" price='בקרוב !!!' isOpen={lsPrograms.find(prog=>prog?.programName===PROGRAMS[1])?.isOpen}
              mainText='קורס חשבון הכנה לכיתה א לילדים שקצת מפחדים מחשבון' setValue={setValue}/>
          <LottieCard name="takyHP" data="takyHP" audioData="takyHP" segments={[10,80,80,120,0,120]} 
                width="50%" height="50%" price='בקרוב !!!' 
              mainText='קורס משולב גם חשבון וגם קריאה' setValue={setValue}/>
          </Flex>
          </Card>
          </Grid>
        </Flex> 
      )}
    </Authenticator>
  );
}

export default CoursesScreen