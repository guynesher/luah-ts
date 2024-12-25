import { Authenticator, Button, Card, Flex, Text } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from "../store/hooks"
import {components} from '../services/components'
import { useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import { AuthUtils } from '../components/AuthUtils';
import { selectAudio, setAudio } from '../reducers/misSlice';
import YouTubePlayer from '../components/youtubePlayer';

function ShirScreen () {
  const dispatch = useAppDispatch()
  const[show,setShow]=useState(false)
  const navigate=useNavigate()
  const audio = useAppSelector(selectAudio)  

  Hub.listen('auth', (data) => {
    if(!show && data.payload.event==="signedIn") {
      setShow(true) 
    }
    if(!show && data.payload.event==="signedOut") {
      setShow(false) 
    }
  });
 
  window.onclick = function() {if(!audio){dispatch(setAudio(true))}}       

  return (
    <Authenticator components={components}>
      {({user}) => (
        <Flex direction={"column"}>
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
                   שיר תוכנית 
            </Text>
            <Button className='btn' onClick={()=>navigate("/CourseMap1")}>חזרה</Button>
            <Flex direction={'row'} gap="medium"  
                 width="100%" 
                 wrap={"wrap"} 
                 justifyContent="center"
                 alignItems="center">
              <YouTubePlayer name="KidPYQmKbvw"/>
          </Flex>
          </Card>
        </Flex> 
      )}
    </Authenticator>
  );
}

export default ShirScreen