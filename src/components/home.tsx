import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy'
import { Flex, View } from '@aws-amplify/ui-react';
import SmallCard from './smallCard';

interface ScreenSize {
  width: number;
  height: number;
}

const Home: React.FC<ScreenSize> = ({width}) => {
    const [value, setValue] = useState<string>();

  console.log(value)
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
        <View  width="100%">
            <ReactPlayer
              url={`https://youtube.com/embed/${'1ZDBLCUVBg4'}?autoplay=0`}
              playing={false}
              loop={false}
              controls={true}
              width={width?width.toString():"640"}
              //height={height?height.toString():"360"}
            />
        </View>
        </Flex>


  );
};

export default Home;
