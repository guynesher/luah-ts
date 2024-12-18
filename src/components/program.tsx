import React, { useEffect, useState } from 'react';
import { Flex, View } from '@aws-amplify/ui-react';
import DataLottieCard from './dataLottieCard';
import ReactPlayer from 'react-player';

interface ScreenSize {
  width: number;
  height: number;
}

const Program: React.FC<ScreenSize> = ({width}) => {
  const [vid,setVid]=useState<string>('XyCbNfRgEbU')

    useEffect(() => {
        //console.log(vid)
    }, [vid]);  

  return (
      <Flex direction={'column'}>
        <View color={"blue.80"} width="100%">
          <br></br>
          <View color={"blue.80"} width="100%">
          <h1> בתוכנית שלנו הילדים שלכם ילמדו את הכל הנושאים כדי להיות מוכנים לכיתה א'</h1>
      <h2> הקורס מלמד מימנויות טרום קריאה כמו מיקום, מרחב וכיוונים, דמות ורקע, חריזה ואבחנה חזותית בפרטים. </h2>
      <h2> הקורס מלמד אותיות דפוס וכתב ואת כל התנועות כולל שווא, וכן, שיטה לחיבור עיצור לתנועה לכדי יצירת הברה. תוך התייחסות לצליל פותח וסוגר וחלוקה להברות, והרכבת מילים מהברות.    </h2>
      <h2>  לקראת סוף הקורס הילד ילמד לקרוא ולהבחין בין מילים אמיתיות למילות תפל.    </h2>
          </View>
          <Flex direction={'row' } 
              width="100%" 
              wrap={"wrap"} 
              justifyContent="center"
              alignItems="center">
                <div onClick={()=>setVid("XyCbNfRgEbU")} className='card'>
          <DataLottieCard name="aRun" data="aRun" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                  width="20%" height="20%" heading='חריזה' cardWidth="300px" cardHeight="200px"
                mainText='זיהוי מילים מתחרזות'/>  
                </div>   
                <div onClick={()=>setVid("wo4xZGUUoAY")} className='card'>
          <DataLottieCard name="aFootball" data="aFootball" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                  width="25%" height="20%" heading=' לימוד תנועות' cardWidth="300px" cardHeight="200px"
                mainText='תנועת השווא'/> 
                </div>   
                <div onClick={()=>setVid('-fE-NBchsU0')} className='card'>
          <DataLottieCard name="aOtioit" data="aOtioit" audioData="BtnAlynu" segments={[20,30,70,80,0,120]} 
                  width="28%" height="20%" heading='חיבור עיצור לתנועה' cardWidth="300px" cardHeight="200px"
                  mainText='בואו נקבל הברה'/> 
                </div>   
                <div onClick={()=>setVid("uZsrVV0yNcU")} className='card'>
          <DataLottieCard name="aOtioit2" data="aOtioit2" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                  width="35%" height="20%" heading='מילים ומילות תפל'
                  cardWidth="300px" cardHeight="200px"
                  mainText='בואו נקרא'/>  
                </div>   
          </Flex>
         </View>
          <View  alignSelf={"center"}>
              <ReactPlayer
              url={`https://youtube.com/embed/${vid}?autoplay=0`}
              playing={false}
                loop={false}
                controls={true}
                width={(width && width<400)?width:width*.7}
                height={(width && width<400)?width:width*.7}
              />
          </View>
        </Flex>
  );
};

export default Program;
