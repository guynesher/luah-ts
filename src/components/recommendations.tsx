import React, { useEffect } from 'react';
import { Flex, View } from '@aws-amplify/ui-react';
import CounterCard from './counterCard';

interface ScreenSize {
  width: number;
  height: number;
  update: boolean;
}

const Recommendations: React.FC<ScreenSize> = ({update}) => {
  //const [counter, setCounter] = useState<boolean>();
    
//   useEffect(() => {
//     if(counter) setCounter(false)
//   }, [counter]);

  useEffect(() => {
        if(update) console.log(update)
      }, [update]);
// console.log(counter)
  return (
      <Flex direction={'column'}>
        <View color={"blue.80"} width="100%">
          <br></br>
          <Flex direction={'row' } 
              width="100%" 
              wrap={"wrap"} 
              justifyContent="center"
              alignItems="center">
                <CounterCard value={update?11:15} heading={"שלבים"} bigSize={true}></CounterCard>
                <CounterCard value={update?11:96} heading={"משחקים"} bigSize={true}></CounterCard>
                <CounterCard value={update?11:438} heading={"סרטונים"} bigSize={true}></CounterCard>
                <CounterCard value={update?11:653} heading={"תרגילים"} bigSize={true}></CounterCard>
          </Flex>
         </View>
        </Flex>
  );
};

export default Recommendations;
