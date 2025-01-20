import React, { useEffect, useState } from 'react';
import { Flex } from '@aws-amplify/ui-react';
import CounterCard from './counterCard';

interface ScreenSize {
  width: number;
  height: number;
}

const HomeSmall: React.FC<ScreenSize> = ({width}) => {
    const [value] = useState<string>();

    useEffect(() => {
    }, [value]);  

  return (
      <>
          { Number(width.toString())<640 && 
         <Flex direction={'row' } 
              width="100%" 
              wrap={"wrap"} 
              alignContent={"center"}
              justifyContent="center"
              alignItems="center">
                <CounterCard value={15} heading={"שלבים"} bigSize={false}></CounterCard>
                <CounterCard value={96} heading={"משחקים"} bigSize={false}></CounterCard>
                <CounterCard value={438} heading={"סרטונים"} bigSize={false}></CounterCard>
                <CounterCard value={653} heading={"תרגילים"} bigSize={false}></CounterCard>
          </Flex>
        }
      </>

  );
};

export default HomeSmall;
