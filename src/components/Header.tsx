import { Grid, View, useTheme, Flex, Button, Image, } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import MenuBar from './menuBar';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { userLogout } from '../actions/userActions';
import { selectProfile, setActiveStatus } from '../reducers/misSlice';
//import { getUrl } from 'aws-amplify/storage';
import { selectUser } from '../reducers/userSlice';
import SpecialMenuBar from './specialMenuBar';
import { VscAccount } from 'react-icons/vsc';

export const Header = () => {
  const { tokens } = useTheme();
  const [width, setWidth] = useState(window.innerWidth);
  const [value, setValue] = useState<string>();
  const [reg, setReg] = useState<boolean>();
  const [profile, setProfile] = useState<string>("שלום");
  const navigate=useNavigate()
  const dispatch = useAppDispatch()
  const lsProfile = useAppSelector(selectProfile)
  const lsUser = useAppSelector(selectUser)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
     if(lsProfile.currentProfile!==value) {
        setValue(lsProfile.currentProfile)
      }
  }, [lsProfile,value]);

  useEffect(() => {
    if(lsUser && lsUser.id==="") {
       setReg(false)
     }
     else {
        setReg(true)
     }
 }, [lsUser,reg]);

  useEffect(() => {
    if(value==="הגדרות") { dispatch(setActiveStatus("Update"));navigate ("/profileSettings"); }
    if(value==="הוספת פרופיל")  { dispatch(setActiveStatus("Create"));navigate ("/profileSettings"); }
    if(value==="ניהול חשבון") { navigate ("/accountSettings") }
    if(value==="צור קשר") { dispatch(setActiveStatus("contact"));navigate ("/") }
    if(value==="המלצות") { dispatch(setActiveStatus("recom"));navigate ("/") }
    if(value==="שירים וסרטונים") { dispatch(setActiveStatus("songs"));navigate ("/") }
    if(value==="התוכנית") { dispatch(setActiveStatus("theProgram"));navigate ("/") }
    if(value==="קצת עלינו") { dispatch(setActiveStatus("about"));navigate ("/") }
    if(value==="יציאה") { 
        dispatch(userLogout());
        navigate ("/");
    }
    if(value==="כניסה") { 
      navigate ("/Courses");
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
                id="logo"
                // src={fileURL}
                src="/Logo.png"
                height="80px"
                width="80px"
                opacity="100%"
                onClick={()=>lsUser.isAdmin? navigate('/Admin'):""}
                />
                {reg && 
            <MenuBar setValue={setValue} 
                    contents={[...lsProfile.profileList,"הוספת פרופיל",null,"הגדרות","ניהול חשבון",null,"יציאה"]} 
                    trig={true} current={profile?profile:"שלום"}/>
                  }
                  {!reg && 
          <Button className="btn" style={{fontSize:"1.3rem"}} onClick={()=>setValue("כניסה")}> 
              <VscAccount size={'40px'} color={'#fc0303'}/> כניסה</Button>
                  }  
            {width>800 && 
                <>
                <Button className="btn" onClick={()=>setValue("קצת עלינו")}>קצת עלינו</Button>
                <Button className="btn" onClick={()=>setValue("התוכנית")}>התוכנית</Button>
                <Button className="btn" onClick={()=>setValue("המלצות")}>המלצות </Button>
                <Button className="btn" onClick={()=>setValue("צור קשר")}>צור קשר</Button>
                <Button className="btn" onClick={()=>setValue("שירים וסרטונים")}>שירים וסרטונים </Button>
                </>
            }
        <SpecialMenuBar setValue={setValue}
                alig='flex-start' 
                contents={["BtnAlynu","BtnProgram","BtnRec","BtnContact","BtnShirim"]}
                audioContents={["BtnAlynu","BtnProgram","BtnRec","BtnContact","BtnShirimNew"]}
                names={["קצת עלינו","התוכנית","המלצות","צור קשר","שירים וסרטונים"]}  
                segments={[[0,90,10,80,0,90],[0,149,15,90,0,149],[37,135,37,135,37,135],[0,80,28,82,0,80],[0,120,0,120,0,120]]}/>

        </Flex>
    </View>
    </Grid>
  );
};
