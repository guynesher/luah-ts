import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Tak1, Tak2 } from '../components/showFile';
import { Button, Flex, Text } from '@aws-amplify/ui-react';
import { useAppSelector } from '../store/hooks';
import { selectActiveStatus } from '../reducers/misSlice';
import { useEffect, useRef } from 'react';

const TakanonScreen: React.FC = () => {
    const navigate = useNavigate();
    const activeStt: string = useAppSelector(selectActiveStatus);
  const takanon = useRef<HTMLDivElement | null>(null);
  const pratiut = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeStt === "takanon" && takanon.current) {takanon.current.scrollIntoView();}
    if (activeStt === "pratiut" && pratiut.current) {pratiut.current.scrollIntoView();}
  }, [takanon,pratiut]);

    return (
        <Flex direction={"column"}> 
            <Flex width="100%">
            <Button width={"100%"} backgroundColor="purple.20" 
                    onClick={()=>navigate(activeStt==="home"?"/":"/")}>חזרה</Button>
            </Flex>
            <div ref={takanon}></div>
            <Text     variation="primary"
                as="p"
                lineHeight="1.5em"
                fontWeight={400}
                fontSize="40px"
                fontStyle="normal"
                textDecoration="none"
                color="purple.100"
                width="100%">
                תקנון אתר
            </Text>
            
            <Flex width="100%" alignItems={"center"} justifyContent={"center"}>
                {Tak1}
            </Flex>
            <Flex width="100%">
            <Button width={"100%"} backgroundColor="purple.20" 
                    onClick={()=>navigate(activeStt==="home"?"/":"/")}>חזרה</Button>
            </Flex>
            <div ref={pratiut}></div>
            <Text     variation="primary"
                as="p"
                lineHeight="1.5em"
                fontWeight={400}
                fontSize="40px"
                fontStyle="normal"
                textDecoration="none"
                color="purple.100"
                width="100%">
                מדיניות פרטיות
            </Text>
            
            <Flex direction={'row' } width="100%">
                {Tak2}
            </Flex>
            <Button width={"100%"} backgroundColor="purple.20" 
                    onClick={()=>navigate(activeStt==="home"?"/":"/")}>חזרה</Button>
        </Flex>
        );
};

export default TakanonScreen;