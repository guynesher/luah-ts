import React, { useEffect, useState } from 'react';
//import ReactPlayer from 'react-player/lazy'
import { Flex, View } from '@aws-amplify/ui-react';
import SmallCard from './smallCard';
import CounterCard from './counterCard';
import ReactPlayer from 'react-player';

interface ScreenSize {
  width: number;
  height: number;
}

const Home: React.FC<ScreenSize> = ({width}) => {
    const [value, setValue] = useState<string>();

        useEffect(() => {
        }, [value]);  
        
  return (
        <Flex direction={{ base: 'column', large: 'row' }}>
        <Flex direction={'row' } width="100%">
        <View color={"blue.80"} width="100%">
            <h1>הכינו את הילד שלכם לכיתה א'  </h1>
            <h1><b>בקלות ובכיף </b></h1>
            <h1>עם אתר לו"ח  </h1>
  
            <br></br>
            <h2>קורס מרתק עם בובות מצוירות  </h2>
            <h2>שילמדו את ילדכם לקרוא לחשוב ולכתוב  </h2>       
   
        </View>
        { Number(width.toString())>640 && 
        <View>
        <SmallCard name={"sheinaS"} data={"sheinaS"} audioData={"sheinaS"} 
              segments={[0,64,64,145,0,137]} width="150px" height="150px" setValue={setValue}></SmallCard> 
        </View>
        }
        </Flex>
        <Flex direction={'row' } width="100%">
        <View  width="100%">
            <ReactPlayer
              url={`https://youtube.com/embed/${'1ZDBLCUVBg4'}?autoplay=0`}
              playing={false}
              loop={false}
              controls={true}
              width={width?width.toString():"640"}
              
            />
        </View>
        { Number(width.toString())>640 && 
        <View color={"blue.80"} width="40%">
          <Flex direction={'column' }
              width="50%" 
              wrap={"wrap"} 
              alignContent={"flex-start"}
              justifyContent="center"
              alignItems="center">
                <CounterCard value={15} heading={"שלבים"} bigSize={true}></CounterCard>
                <CounterCard value={96} heading={"משחקים"} bigSize={true}></CounterCard>
                <CounterCard value={438} heading={"סרטונים"} bigSize={true}></CounterCard>
                <CounterCard value={653} heading={"תרגילים"} bigSize={true}></CounterCard>
          </Flex>
         </View>
        }
         </Flex>
        </Flex>
  );
};

export default Home;
