import { Authenticator, Card, Flex, Text } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from "../store/hooks"
import {components} from '../services/components'
import { useEffect, useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import { I18n } from 'aws-amplify/utils';
import { translations } from '@aws-amplify/ui-react';
import { Header } from '../components/Header';
import { AuthUtils } from '../components/AuthUtils';
import { selectAudio, setActiveStatus, setAudio, setCurrentProgram } from '../reducers/misSlice';
import LottieCard from '../components/lottieCard';
import { getPrograms, selectPrograms } from '../reducers/userSlice';
import { PROGRAMS } from '../constants/userConstants';
//import { userLogout } from '../actions/userActions';
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
  //const [curUP, setCurUp] = useState<string>("");
  const [cancelBtn, setCancelBtn] = useState<boolean>(false);
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

    const prog1 = lsPrograms.find((prog) => prog?.programName===PROGRAMS[0])
    const prog2 = lsPrograms.find((prog) => prog?.programName===PROGRAMS[1])

  useEffect(() => {
    setCancelBtn(false)
    if(prog1?.isOpen && prog1?.isOpen) setCancelBtn(true)
    if(value==="Program0101" && prog1?.isOpen) {dispatch(setCurrentProgram(PROGRAMS[0]));navigate('/CourseMap1')}
    if(value==="Program0102" && prog2?.isOpen) {dispatch(setCurrentProgram(PROGRAMS[1]));navigate('/CourseMap2')}
    if(value==="Program0101" && prog1 && !prog1?.isOpen) {
      dispatch(getPrograms([prog1.email,prog1?.userProgramId]))
      dispatch(setActiveStatus("Program0101"))
      navigate('/Payment')
    }
    // if(value==="Program0102" && prog2 && !prog2?.isOpen) {
    //   dispatch(getPrograms([prog2.email,prog2?.userProgramId]))
    //   dispatch(setActiveStatus("Program0102"))
    //   navigate('/Payment')
    // }
    // if(value==="Programs01010102" && prog1 && !prog1?.isOpen&& prog2 && !prog2?.isOpen) {
    //   dispatch(getPrograms([prog1.email,prog1?.userProgramId,prog2?.userProgramId]))
    //   dispatch(setActiveStatus("Programs01010102"))
    //   navigate('/Payment')
    // }
}, [value,prog1,prog2])

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
              fontSize="2.5rem"
              fontStyle="oblique"
              textDecoration="none"
              width="100%"
              padding={"1rem"}
              color={"purple.100"}>
                   תוכניות הלימוד
            </Text>
            <Flex direction={'row'} gap="medium"  padding={"1.1rem"}
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
              {!cancelBtn && 
          <LottieCard name="Programs01010102" data="takyHP" audioData="takyHP" segments={[10,80,80,120,0,120]} 
                width="50%" height="50%" price='בקרוב !!!' 
              mainText='קורס משולב גם חשבון וגם קריאה' setValue={setValue}/>
              }
          </Flex>
          </Card>
        </Flex> 
      )}
    </Authenticator>
  );
}

export default CoursesScreen