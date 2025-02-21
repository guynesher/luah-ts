import { Card, Flex, Image, Text } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from "../store/hooks"
//import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { selectAudio, setAudio } from '../reducers/misSlice';

function FailScreen() {
  const dispatch = useAppDispatch()
  const navigate=useNavigate()
  const audio = useAppSelector(selectAudio)
 
  window.onclick = function() {if(!audio){dispatch(setAudio(true))}}
  
  return (
        <Flex direction={"column"}>
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
                   אופס משהו השתבש... 
            </Text>
            <Image
                alt="logo"
                id="logo2"
                src="/Logo.png"
                height="500px"
                width="500px"
                opacity="100%"
                onClick={()=>navigate('/Courses/')}
                />
            <Flex direction={'row'} gap="medium"  padding={"3rem"}
                 width="100%" 
                 wrap={"wrap"} 
                 justifyContent="center"
                 alignItems="center">
          </Flex>
          </Card>
        </Flex> 
  );
}

export default FailScreen