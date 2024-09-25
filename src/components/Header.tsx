import { Grid, View, useTheme, Flex, Button, Image, } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import MenuBar from './menuBar';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { userLogout } from '../actions/userActions';
import { selectProfile, setActiveStatus } from '../reducers/misSlice';
import { getUrl } from 'aws-amplify/storage';

export const Header = () => {
  const { tokens } = useTheme();
  const [width, setWidth] = useState(window.innerWidth);
  const [value, setValue] = useState<string>();
  const [profile, setProfile] = useState<string>("שלום");
  const navigate=useNavigate()
  const dispatch = useAppDispatch()
  const lsProfile = useAppSelector(selectProfile)
  const[fileURL,setFileURL]=useState("")

  useEffect(() => {
    async function setURLs(){
    const linkToStorageFile = await getUrl({
      path: "global/Logo.png",
    });
    setFileURL(linkToStorageFile.url.toString())
  }
  setURLs()
}, [dispatch])

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
     if(lsProfile.currentProfile!==value) {
        setValue(lsProfile.currentProfile)
      }
  }, [lsProfile]);

  useEffect(() => {
    if(value==="הגדרות") { dispatch(setActiveStatus("Update"));navigate ("/profileSettings"); }
    if(value==="הוספת פרופיל")  { dispatch(setActiveStatus("Create"));navigate ("/profileSettings"); }
    if(value==="ניהול חשבון") { navigate ("/accountSettings") }
    if(value==="צור קשר") { navigate ("/") }
    if(value==="המלצות") { navigate ("/") }
    if(value==="שירים וסרטונים") { navigate ("/") }
    if(value==="התוכנית") { navigate ("/") }
    if(value==="קצת עלינו") { navigate ("/") }
    if(value==="יציאה") { 
        dispatch(userLogout());
        navigate ("/");
    }
    if(value!=="הגדרות" && value!=="ניהול חשבון" && value!=="יציאה" && value!=="צור קשר" && value!=="הוספת פרופיל" &&
        value!=="המלצות" && value!=="שירים וסרטונים" && value!=="התוכנית" && value!=="קצת עלינו") {
        setProfile(value?value:"שלום")
        //console.log(value)
    }
  }, [value]);

  return (
    <Grid
      templateColumns=" 1fr"
      templateRows=" 6rem"
      gap={tokens.space.small}
    >
    <View
        alignSelf={'center'}
        padding="1rem"
        boxShadow="3px 3px 5px 6px var(--amplify-colors-neutral-60)"
        color='white'
        backgroundColor='purple.20'
    >      
        <Flex direction="row" justifyContent="space-between" paddingTop="1rem">
            <Image
                alt="logo"
                src={fileURL}
                height="80px"
                width="80px"
                opacity="100%"
                />
            <MenuBar setValue={setValue} 
                    contents={[...lsProfile.profileList,"הוספת פרופיל",null,"הגדרות","ניהול חשבון",null,"יציאה"]} 
                    trig={true} current={profile?profile:"שלום"}/>
            {width>800 && 
                <>
                <Button className="btn" onClick={()=>setValue("קצת עלינו")}>קצת עלינו</Button>
                <Button className="btn" onClick={()=>setValue("התוכנית")}>התוכנית</Button>
                <Button className="btn" onClick={()=>setValue("המלצות")}>המלצות </Button>
                <Button className="btn" onClick={()=>setValue("צור קשר")}>צור קשר</Button>
                <Button className="btn" onClick={()=>setValue("שירים וסרטונים")}>שירים וסרטונים </Button>
                </>
            }
            <MenuBar setValue={setValue} 
                    contents={["קצת עלינו","התוכנית","שירים וסרטונים",null,"המלצות","צור קשר"]} 
                    trig={false} current="גיא"/>
        </Flex>
    </View>
    </Grid>
  );
};
