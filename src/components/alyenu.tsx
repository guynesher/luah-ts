import React from 'react';
import { Flex, View } from '@aws-amplify/ui-react';
import DataLottieCard from './dataLottieCard';

interface ScreenSize {
  width: number;
  height: number;
}

const Aleynu: React.FC<ScreenSize> = ({}) => {

  return (
        <View color={"blue.80"} width="100%">
          <Flex direction={'row' } width="100%">
          <DataLottieCard name="Program0101" data="Program0101" audioData="Program0101" segments={[0,120,10,80,0,120]} 
                  width="50%" height="50%" heading='הנאה מתוך למידה'
                mainText='מלווה בשירים וסיפורים ודמויות מצוירות המסבירות את הנושא ומלוות את התרגילים שאף הן בעצם משחקים ולא דפי עבודה רגילים'/>     
          <DataLottieCard name="Program0101" data="Program0101" audioData="Program0101" segments={[0,120,10,80,0,120]} 
                  width="50%" height="50%" heading='dsfgfdg'
                mainText='קורס קריאה הכנה לכיתה א לילדים שאוהבים ללמוד בכיף'/> 
          <DataLottieCard name="Program0101" data="Program0101" audioData="Program0101" segments={[0,120,10,80,0,120]} 
                  width="50%" height="50%" heading='dsfgfdg'
                mainText='קורס קריאה הכנה לכיתה א לילדים שאוהבים ללמוד בכיף'/>    
          </Flex>
         </View>
  );
};

export default Aleynu;
