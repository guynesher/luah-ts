import React, { useEffect, useState } from 'react';
//import ReactPlayer from 'react-player/lazy'
import { Flex, Text, View } from '@aws-amplify/ui-react';
import SmallCard from './smallCard';
import CounterCard from './counterCard';
//import ReactPlayer from 'react-player';

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
            <h1><b>התוכנית שמלמדת את הילד בקלות ובכיף </b></h1>
            <Text     variation="primary" as="h2" color={"blue.80"} width="100%"
              lineHeight="2.5em" fontWeight={"bold"} fontSize="2em" fontStyle="normal">באתר לו"ח   </Text>
  
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

        <video width={"100%"} height={"100%"}
                controls loop={false} autoPlay={false} controlsList="nodownload" 
                poster="https://dw9m3ez1dxtsh.cloudfront.net/MainPic.png">
          <source src='https://dw9m3ez1dxtsh.cloudfront.net/Promo.mp4' type='video/mp4'>
          </source>
        </video>
        
            {/* <ReactPlayer
              //url={'https://dw9m3ez1dxtsh.cloudfront.net/global/Promo.mp4'}
              url={`https://youtube-nocookie.com/embed/${'1ZDBLCUVBg4'}?autoplay=0`}
              playing={false}
              loop={false}
              controls={true}
              width={width?width.toString():"640"}
            /> */}
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
