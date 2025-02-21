import { Card, Flex, Text, View } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { selectAudio, setAudio } from '../reducers/misSlice';
import DataLottieCard from '../components/dataLottieCard';
import { selectUser } from '../reducers/userSlice';

function SipurimScreen() {
  const dispatch = useAppDispatch()
  const navigate=useNavigate()
  const audio = useAppSelector(selectAudio)
  const [vid,setVid]=useState<string>('KidPYQmKbvw')
  const [width, setWidth] = useState<number>(1100);
  const [height, setHeight] = useState<number>(800);
  const [reg, setReg] = useState<boolean>();
  const lsUser = useAppSelector(selectUser);

   useEffect(() => {
    const initWidth = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    const initHeight = (window.innerHeight > 0) ? window.innerHeight : window.screen.height;
    setHeight(initHeight);
    setWidth(initWidth);
  }, [height]);

  const resize = () => {
    const w = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    const h = (window.innerHeight > 0) ? window.innerHeight : window.screen.height;
    setHeight(h);
    setWidth(w);
  };

  window.onresize = resize;

     useEffect(() => {
       let video = document.getElementById('video_sip');
       if(video && reg) video.setAttribute("src", `https://dw9m3ez1dxtsh.cloudfront.net/${vid}.mp4?autoplay=0`);
       if(video && !reg) {
        if(vid==='KidPYQmKbvw' || vid==='wheatGrain') video.setAttribute("src", `https://dw9m3ez1dxtsh.cloudfront.net/${vid}.mp4?autoplay=0`);
        else {navigate("/Courses/")}
      }
        
     }, [vid]);  

  window.onclick = function() {if(!audio){dispatch(setAudio(true))}}
  
  useEffect(() => {
      if(lsUser && lsUser.id==="") {
        setReg(false)
      }
      else {
          setReg(true)
      }
  }, [lsUser,reg]);

  return (
        <Flex direction={"column"}>
          <Header></Header>
          <Card 
            columnStart="1"
            columnEnd="-1"
            backgroundColor="orange.20"
          >
            <Text     
              variation="primary"
              as="p"
              lineHeight="1.0em"
              fontWeight={400}
              fontSize="2.5rem"
              fontStyle="oblique"
              textDecoration="none"
              width="100%"
              //padding={"1rem"}
              color={"purple.100"}>
                    סיפורים לפני השינה
            </Text>
            <Flex direction={'row'} gap="medium"  //padding={"0.5rem"}
                 width="100%" 
                 wrap={"wrap"} 
                 justifyContent="center"
                 alignItems="center">
              
              <View  alignSelf={"center"}>
              {vid && 
                  <video width={(width && width<600)?width:width*.35} id="video_sip"
                      height={(width && width<600)?width:width*.2} poster={`https://dw9m3ez1dxtsh.cloudfront.net/${vid}.png`}
                      controls loop={false} autoPlay={false} controlsList="nodownload">
                    <source src={`https://dw9m3ez1dxtsh.cloudfront.net/${vid}.mp4?autoplay=0`} type='video/mp4'>
                    </source>
                  </video>
                  }
              </View>

              <View color={"blue.80"} width="100%">
                <Flex direction={'row' } 
                    width="100%" 
                    wrap={"wrap"} 
                    justifyContent="center"
                    alignItems="center">
                      <div onClick={()=>setVid("wheatGrain")} className='card'>
                <DataLottieCard name="aValleybball" data="aValleybball" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                        width="70%" height="20%" heading='גרגיר החיטה ובן האיכר' cardWidth="300px" cardHeight="200px"
                      mainText=''/>  
                      </div>   
                      <div onClick={()=>setVid("KidPYQmKbvw")} className='card'>
                <DataLottieCard name="aTennis" data="aTennis" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                        width="70%" height="20%" heading='כל האותיות' cardWidth="300px" cardHeight="200px"
                      mainText=''/> 
                      </div>   
                      <div onClick={()=>setVid('specialDay')} className='card'>
                <DataLottieCard name="aBasketball" data="aBasketball" audioData="BtnAlynu" segments={[20,30,70,80,0,120]} 
                        width="25%" height="20%" heading='היום המיוחד' cardWidth="300px" cardHeight="200px"
                        mainText=''/> 
                      </div>   
                      <div onClick={()=>setVid("pinkBird")} className='card'>
                <DataLottieCard name="aMiskolot" data="aMiskolot" audioData="BtnAlynu" segments={[0,120,10,80,0,120]} 
                        width="50%" height="20%" heading='הציפור הורודה'
                        cardWidth="300px" cardHeight="200px"
                        mainText=''/>  
                      </div>  
                      <div onClick={()=>navigate("/Courses/")} className='card'>
                <DataLottieCard name="aBike" data="aBike" audioData="logo" segments={[0,120,10,80,0,120]} 
                  width="25%" height="20%" heading='אתר לו"ח - תכנים נוספים '
                  cardWidth="300px" cardHeight="200px"
                  mainText=''/> 
                      </div>
                </Flex>
              </View>

            </Flex>
          </Card>
        </Flex> 
  );
}

export default SipurimScreen