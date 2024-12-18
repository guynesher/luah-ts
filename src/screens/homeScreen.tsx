import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectActiveStatus, selectAudio, setAudio } from "../reducers/misSlice";
import { Button, Card, Flex, Grid } from "@aws-amplify/ui-react";
import { Header } from "../components/Header";
import Access from "../components/accessibility";
import Sidebar from "../components/sideBar";
import Home from "../components/home";
import { useEffect, useRef, useState } from "react";
import Aleynu from "../components/alyenu";
import { VscAccount } from "react-icons/vsc";
import Program from "../components/program";
import Songs from "../components/songs";
import Recommendations from "../components/recommendations";
import HomeSmall from "../components/homeSmall";
import Contact from "../components/contact";

function HomeScreen() {
  const activeStt: string = useAppSelector(selectActiveStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const audio: boolean = useAppSelector(selectAudio);
  const [width, setWidth] = useState<number>(1100);
  const [height, setHeight] = useState<number>(800);
  const page2 = useRef<HTMLDivElement | null>(null);
  const page3 = useRef<HTMLDivElement | null>(null);
  const page4 = useRef<HTMLDivElement | null>(null);
  const page5 = useRef<HTMLDivElement | null>(null);
  const page6 = useRef<HTMLDivElement | null>(null);

  window.onclick = function() {
    if (!audio) {
      dispatch(setAudio(true));
    }
  };

  useEffect(() => {
    if (activeStt === "about" && page2.current) {page2.current.scrollIntoView();}
    if (activeStt === "theProgram" && page3.current) {page3.current.scrollIntoView();}
    if (activeStt === "songs" && page4.current) {page4.current.scrollIntoView();}
    if (activeStt === "recom" && page5.current) {page5.current.scrollIntoView();}
    if (activeStt === "contact" && page6.current) {page6.current.scrollIntoView();}
  }, [activeStt]);

  useEffect(() => {
    const initWidth = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    const initHeight = (window.innerHeight > 0) ? window.innerHeight : window.screen.height;
    setHeight(initHeight);
    setWidth(initWidth);
  }, []);

  const resize = () => {
    const w = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    const h = (window.innerHeight > 0) ? window.innerHeight : window.screen.height;
    setHeight(h);
    setWidth(w);
  };

  window.onresize = resize;

  return (
    <Flex direction={"column"}>
      <Header />
      <Access />
      <Grid
        columnGap="0.5rem"
        rowGap="0.5rem"
        templateColumns="1fr 1fr 1fr"
        templateRows="1fr 3fr 1fr"
      >
        <Card
          columnStart="1"
          columnEnd="-1"
          backgroundColor="orange.20"
        >
          <HomeSmall width={width} height={height} />
          <Sidebar />
          <Home width={width} height={height} />
          <br></br>
          <Button className="btn" style={{fontSize:"1.3rem"}} onClick={()=>navigate("/Courses")}> 
              <VscAccount size={'40px'} color={'#fc0303'}/> הרשמה (ללא תשלום)</Button>  
          <div ref={page2}>
            <Aleynu width={width} height={height} /> 
          </div>
          <br></br>
          <Button className="btn" style={{fontSize:"1.3rem"}} onClick={()=>navigate("/Courses")}> 
              <VscAccount size={'40px'} color={'#fc0303'}/> הרשמה (ללא תשלום)</Button>  
          <div ref={page3}>
            <Program width={width} height={height} /> 
          </div>
          <br></br>
          <Button className="btn" style={{fontSize:"1.3rem"}} onClick={()=>navigate("/Courses")}> 
              <VscAccount size={'40px'} color={'#fc0303'}/> הרשמה (ללא תשלום)</Button>  
          <div ref={page4}>
            <Songs width={width} height={height} /> 
          </div>
          <br></br>
          <Button className="btn" style={{fontSize:"1.3rem"}} onClick={()=>navigate("/Courses")}> 
              <VscAccount size={'40px'} color={'#fc0303'}/> הרשמה (ללא תשלום)</Button>  
          <div ref={page5}>
            <Recommendations width={width} height={height} update={activeStt==="recom"}/> 
          </div>
          <br></br>
          <Button className="btn" style={{fontSize:"1.3rem"}} onClick={()=>navigate("/Courses")}> 
              <VscAccount size={'40px'} color={'#fc0303'}/> הרשמה (ללא תשלום)</Button> 
          <div ref={page6}>
            <Contact width={width} height={height} /> 
          </div>
          <br></br>
          <Button className="btn" style={{fontSize:"1.3rem"}} onClick={()=>navigate("/Courses")}> 
              <VscAccount size={'40px'} color={'#fc0303'}/> הרשמה (ללא תשלום)</Button>   
            {/* <button onClick={() => navigate('/LandingPage')}>Landing Page</button> */}
        </Card>
      </Grid>
    </Flex>
  );
}

export default HomeScreen;

