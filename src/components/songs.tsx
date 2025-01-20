import React, { useEffect, useState } from 'react';
import { Flex, View } from '@aws-amplify/ui-react';
import DataLottieCard from './dataLottieCard';
import ReactPlayer from 'react-player';

interface ScreenSize {
  width: number;
  height: number;
}

const Songs: React.FC<ScreenSize> = ({width}) => {
  const [vid,setVid]=useState<string>('KidPYQmKbvw')

    useEffect(() => {
        //console.log(vid)
    }, [vid]);  

  return (
      <Flex direction={'column'}>
        <View color={"blue.80"} width="100%">
          <br></br>
          <View color={"blue.80"} width="100%">
          <h1>לו"ח לומדים וחושבים</h1>
      <h2>מיזם חדשני לגילאי 4-6 המלמד קריאה בהנאה ובכיף </h2>
          </View>
          <Flex direction={'row' } 
              width="100%" 
              wrap={"wrap"} 
              justifyContent="center"
              alignItems="center">
                <div onClick={()=>setVid("0E5cdiWc9k0")} className='card'>
          <DataLottieCard name="aValleybball" data="aValleybball" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                  width="70%" height="20%" heading='תוכנית המתאימה עצמה לילד' cardWidth="300px" cardHeight="200px"
                mainText='התוכנית שלנו'/>  
                </div>   
                <div onClick={()=>setVid("KidPYQmKbvw")} className='card'>
          <DataLottieCard name="aTennis" data="aTennis" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                  width="70%" height="20%" heading='בליווי שירים קליטים ומקוריים' cardWidth="300px" cardHeight="200px"
                mainText='שיר התוכנית שלנו'/> 
                </div>   
                <div onClick={()=>setVid('gRuT8gNjF14')} className='card'>
          <DataLottieCard name="aBasketball" data="aBasketball" audioData="BtnAlynu" segments={[20,30,70,80,0,120]} 
                  width="25%" height="20%" heading='מורים מצוירים בגילם של הילדים' cardWidth="300px" cardHeight="200px"
                  mainText='סיפור רקע לכל שיעור'/> 
                </div>   
                <div onClick={()=>setVid("m9vZQ8XijIY")} className='card'>
          <DataLottieCard name="aMiskolot" data="aMiskolot" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                  width="50%" height="20%" heading='מן היסוד ועד קריאה מלאה'
                  cardWidth="300px" cardHeight="200px"
                  mainText='שיעור טרום קריאה כדוגמא'/>  
                </div>   
          </Flex>
         </View>
          <View  alignSelf={"center"}>
          {vid && <ReactPlayer
              url={`https://youtube-nocookie.com/embed/${vid}?autoplay=0`}
              playing={false}
                loop={false}
                controls={true}
                width={(width && width<400)?width:width*.7}
                height={(width && width<400)?width:width*.45}
              />}
          </View>
        </Flex>
  );
};

export default Songs;
