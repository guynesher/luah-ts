import { Authenticator, Button, Card, CheckboxField, Flex, Input, Label, Link, Text, View } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from "../store/hooks"
import {components} from '../services/components'
import { useEffect, useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import { AuthUtils } from '../components/AuthUtils';
import { selectActiveStatus, selectAudio, setAudio } from '../reducers/misSlice';
import LottieCard from '../components/lottieCard';
import { selectPrograms } from '../reducers/userSlice';
import { PROGRAMS } from '../constants/userConstants';
import { userLogout } from '../actions/userActions';

function PaymentScreen() {
  const dispatch = useAppDispatch()
  const[show,setShow]=useState(false)
  const navigate=useNavigate()
  const audio = useAppSelector(selectAudio)
  const [prog, setProg] = useState<any>();
  const [value, setValue] = useState<string>();
  const [kupon, setKupon] = useState<string>("");
  const lsPrograms = useAppSelector(selectPrograms)
  const status= useAppSelector(selectActiveStatus)

  Hub.listen('auth', (data) => {
    if(!show && data.payload.event==="signedIn") {
      setShow(true) 
      navigate("/Courses") 
    }
    if(!show && data.payload.event==="signedOut") {
      setShow(false) 
    }
  });
 
  window.onclick = function() {if(!audio){dispatch(setAudio(true))}}

useEffect(() => {
  if(status) {
    if(status==="Program0101") {
      setProg(<LottieCard name="Program0101" data="Program0101" audioData="Program0101" segments={[0,120,10,80,0,120]} 
              width="50%" height="50%" price='50 ש"ח' isOpen={lsPrograms.find(prog=>prog?.programName===PROGRAMS[0])?.isOpen}
            mainText='קורס קריאה הכנה לכיתה א לילדים שאוהבים ללמוד בכיף' setValue={setValue}/>)
    }
    if(status==="Program0102") {
      setProg(<LottieCard name="Program0102" data="Program0102" audioData="logo" segments={[0,52,64,139,0,52]} 
        width="50%" height="50%" price='50 ש"ח' isOpen={lsPrograms.find(prog=>prog?.programName===PROGRAMS[1])?.isOpen}
      mainText='קורס חשבון הכנה לכיתה א לילדים שקצת מפחדים מחשבון' setValue={setValue}/>)
    }
    if(status==="Programs01010102") {
      setProg(<LottieCard name="Programs01010102" data="takyHP" audioData="takyHP" segments={[10,80,80,120,0,120]} 
          width="50%" height="50%" price='80 ש"ח' 
        mainText='קורס משולב גם חשבון וגם קריאה' setValue={setValue}/>)
    }
  }    
  if(status==="") {navigate("/Courses")}
}, [status])

useEffect(() => {
  if(value) {
    clickHandler()
  }
}, [value])

const clickHandler = () => {
  if(status==="Program0101") {
      window.open('https://mrng.to/I6wUoZNVYt','_blank')
      setTimeout(function() {dispatch(userLogout())}, 30000); 
  }
  if(status==="Program0102") {
    window.open('https://mrng.to/I6wUoZNVYt','_blank')
    setTimeout(function() {dispatch(userLogout())}, 30000); 
  }
  if(status==="Programs01010102") {
    window.open('https://mrng.to/I6wUoZNVYt','_blank')
    setTimeout(function() {dispatch(userLogout())}, 30000); 
  }
  }
  
  return (
    <Authenticator components={components}>
      {({user}) => (
        <>
          <AuthUtils email={user?.signInDetails?.loginId} user={user?.userId}/>
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
                   רכישת תוכנית הלימוד
            </Text>
            <Button className='btn' onClick={()=>navigate("/Courses")}> חזרה לרשימת הקורסים </Button> 

                <Flex direction={{large:'row' ,base:'column'}} width="100%">
                <Flex direction={'column' } width="100%" alignItems={{base: "flex-start", large: "center"}}>
                <View color={"blue.80"} width="50%">
                {prog}     
                </View>
                </Flex>
                <View color={"blue.80"} width="100%">
                <Flex direction={'column' } width="100%"  alignItems={"center"}>
                <Label htmlFor="kupon" color="purple.100" width={"100%"} padding={"20px"}>  
                  במידה ויש אנא הזן קוד קופון כאן
                  </Label>
                  <Input id="kupon" name="kupon" size="large"
                        value={kupon?kupon:""} 
                        onChange={(e)=>setKupon(e.target.value)}
                        width={{ base: '100%', large: '50%' }} backgroundColor="purple.20" color="purple.80"/>  
                  <CheckboxField padding={"2rem"} defaultChecked
                      label="אנא אשרו שקראתם את תקנון האתר"
                      name="subscribe"
                      value="yes"
                    /> 
                    <Link
                    color="#007EB9" width={"100%"} padding={"30px"}
                    onClick={()=>{navigate("/Takanon")}}
                    >
                    תקנון אתר
                    </Link>  
                  <Button className='btn' width={{ base: '100%', large: '50%' }} onClick={()=>clickHandler()} >לרכישה (תועבר לאתר מאובטח) </Button> 
                  </Flex>
                  </View> 
                </Flex> 
          </Card>
        </> 
      )}
    </Authenticator>
  );
}

export default PaymentScreen