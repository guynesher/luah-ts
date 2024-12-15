import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectActiveStatus, selectAudio, setAudio } from "../reducers/misSlice";
import { Card, Flex, Grid } from "@aws-amplify/ui-react";
import { Header } from "../components/Header";
import Access from "../components/accessibility";
import Sidebar from "../components/sideBar";
import Home from "../components/home";
import { useEffect, useRef, useState } from "react";
//import Aleynu from "../components/alyenu";

function HomeScreen() {
  const activeStt: string = useAppSelector(selectActiveStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const audio: boolean = useAppSelector(selectAudio);
  const [width, setWidth] = useState<number>(1100);
  const [height, setHeight] = useState<number>(800);
  const page2 = useRef<HTMLDivElement | null>(null);

  window.onclick = function() {
    if (!audio) {
      dispatch(setAudio(true));
    }
  };

  useEffect(() => {
    if (activeStt === "about" && page2.current) {
      page2.current.scrollIntoView();
    }
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
          <Sidebar />
          <Home width={width} height={height} />
          <div ref={page2}>
            {/* <Aleynu width={width} height={height} /> */}
          </div>
          <button onClick={() => navigate('/Courses')}>Courses Screen</button>
          <button onClick={() => navigate('/LandingPage')}>Landing Page</button>
        </Card>
      </Grid>
    </Flex>
  );
}

export default HomeScreen;

