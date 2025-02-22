import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getBestRecom, selectActiveStatus, selectAudio, selectRecoms, setActiveStatus, setAudio } from "../reducers/misSlice";
import { Button, Card, Flex, Link, Loader, Text, View } from "@aws-amplify/ui-react";
import { Header } from "../components/Header";
import Access from "../components/accessibility";
import Sidebar from "../components/sideBar";
import Home from "../components/home";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { FaYoutube, FaInstagramSquare, FaFacebook  } from "react-icons/fa";
//import Aleynu from "../components/alyenu";
//import Program from "../components/program";
//import Songs from "../components/songs";
//import Recommendations from "../components/recommendations";
//import Contact from "../components/contact";
const Aleynu = lazy(() => import('../components/alyenu.tsx'));
const Program = lazy(() => import('../components/program.tsx'));
const Songs = lazy(() => import('../components/songs.tsx'));
const Recommendations = lazy(() => import('../components/recommendations.tsx'));
const Contact = lazy(() => import('../components/contact.tsx'));
import HomeSmall from "../components/homeSmall";
import { selectUser } from "../reducers/userSlice";

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
  const [reg, setReg] = useState<boolean>();
  const [items, setItems]=useState<any[]>([])
  const lsUser = useAppSelector(selectUser)
  const recoms = useAppSelector(selectRecoms)

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
    if(Object.keys(items).length===0) {
          dispatch(getBestRecom())
          setItems([1])
        }
    if(recoms) {
      setItems(recoms.slice(0, 6)) 
    }
  }, [recoms]);

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
      <Header />
      <Access />

        <Card
          columnStart="1"
          columnEnd="-1"
          backgroundColor="orange.20"
        >
          <HomeSmall width={width} height={height} />
          <Sidebar />
          <Flex width={{large:"35%" , small:"100%"}} justifyContent={"center"}>
          <Button className="btn" style={{fontSize:"1.3rem"}} onClick={()=>navigate("/Courses")}> 
              <VscAccount size={'40px'} color={reg?'#6bfc03':'#fc0303'}/> {reg?'כניסה':'הרשמה (ללא תשלום)'} </Button>            
          </Flex>
          <Home width={width} height={height} />
          <br></br>

          <Suspense fallback={<Loader  />}>
          <div ref={page2}>
            <Aleynu width={width} height={height} /> 
          </div>
          <br></br>
          <Button className="btn" style={{fontSize:"1.3rem"}} onClick={()=>navigate("/Courses")}> 
              <VscAccount size={'40px'} color={reg?'#6bfc03':'#fc0303'}/>{reg?'כניסה':'הרשמה (ללא תשלום)'}</Button>
          <div ref={page3}>
            <Program width={width} height={height} /> 
          </div>
          <br></br>
          <Button className="btn" style={{fontSize:"1.3rem"}} onClick={()=>navigate("/Courses")}> 
              <VscAccount size={'40px'} color={reg?'#6bfc03':'#fc0303'}/>{reg?'כניסה':'הרשמה (ללא תשלום)'}</Button>  
          <div ref={page4}>
            <Songs width={width} height={height} /> 
          </div>
          <br></br>
          <Button className="btn" style={{fontSize:"1.3rem"}} onClick={()=>navigate("/Courses")}> 
              <VscAccount size={'40px'} color={reg?'#6bfc03':'#fc0303'}/> {reg?'כניסה':'הרשמה (ללא תשלום)'}</Button>  
          <div ref={page5}>
            <Recommendations width={width} height={height} items={items}/> 
          </div>
          <br></br>

          <div ref={page6}>
            <Contact width={width} height={height} /> 
          </div>
          <br></br>
  
          <View color={"purple.80"} textAlign="center"padding={"12px"}>
            <Link
            href="https://www.instagram.com/miriam_atar_luah/"
            color="blue.80" padding={"30px"} aria-label="קישור לאיסטגרם"
            >חפשו אותנו ב:
              <FaInstagramSquare color="orange" size={50}/>
            </Link>
            <Link
            href="https://www.facebook.com/profile.php?id=61562778913647"
            color="#007EB9" padding={"30px"} aria-label="קישור לפייסבוק"
            >
            <FaFacebook color="blue"  size={40}/> 
            </Link>
            <Link
            href="https://www.youtube.com/@Lu-ah-gv8py"
            color="#007EB9" padding={"30px"} aria-label="קישור ליוטיוב"
            >
            <FaYoutube color="red"  size={50}/> 
            </Link>
          </View> 

          <View color={"purple.80"} textAlign="center"padding={"12px"}>
            <Text>
              &copy; כל הזכויות שמורות לאתר לו"ח ולמפעיליו - אסור להשתמש בדמויות ובתכנים ללא אישור
            </Text>
            <Link
            color="blue.80" width={"50%"} padding={"30px"}
            onClick={()=>{dispatch(setActiveStatus("takanon"));navigate("/Takanon");}}
            >
            תקנון אתר
            </Link>
            <Link
            color="blue.80" width={"50%"}
            onClick={()=>{dispatch(setActiveStatus("pratiut"));navigate("/Takanon");}}
            >
            מדיניות פרטיות 
            </Link>
          </View>
          </Suspense>
        </Card>
    </Flex>
  );
}

export default HomeScreen;


