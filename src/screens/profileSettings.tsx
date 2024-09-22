import { useNavigate } from "react-router-dom";
import getFromRestAPI from "../actions/usersActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectProfile, setCurrentProfile } from "../reducers/misSlice";
import { selectUser, setPrograms, setUser } from "../reducers/userSlice";
import { PROGRAMS } from "../constants/userConstants";
import { useEffect, useState } from "react";

function ProfileSettings() {
  const navigate=useNavigate()
  const lsProfile = useAppSelector(selectProfile)
  const lsUser = useAppSelector(selectUser)
  const [usrData, setData] = useState<any>(false);  
  const [dataCreated, setDataCreated] = useState<boolean>(false);
  const [gotData, setGotData] = useState<boolean>(false);
  const [distributed, setDistributed] = useState<boolean>(false);
  const dispatch = useAppDispatch()

  //DB connections: 
  //Create New Profile
  const newProfileNumber:string=(lsProfile.profileList.length+1).toString()

  const createProfile = async () => {
    (async () => { 
      await getFromRestAPI(["createUser",lsUser.email,lsUser.id,newProfileNumber,lsUser.computerIP,
         ...PROGRAMS])
      })() 
      setDataCreated(false) 
  }

  useEffect(() => {
    if(dataCreated){ //If user signedIn get his details 
      setDataCreated(false); //Do only once
      (async () => { 
        setData(await getFromRestAPI(["listUsersbyEmail",lsUser.email,lsUser.id,newProfileNumber,lsUser.computerIP,
          ...PROGRAMS]))
          setGotData(true)
        })()   
    }
  }, [lsUser,dataCreated]);

  useEffect(() => { //If there are user details put the details on the store 
  if(gotData && !distributed) {
      setDistributed(true)
      console.log(usrData)
      dispatch(setUser({
            id: usrData.res2.data.getAdress.user.userId,
            cognitoUserName: usrData.res2.data.getAdress.user.cognitoUserName,
            name: usrData.res2.data.getAdress.user.name,
            surname: usrData.res2.data.getAdress.user.surname,
            phone: usrData.res2.data.getAdress.user.phone,
            email: usrData.res2.data.getAdress.user.email ,
            picture: usrData.res2.data.getAdress.user.picture,
            isAdmin: usrData.res2.data.getAdress.user.isAdmin?usrData.res2.data.getAdress.user.isAdmin:false,
            sessionStart: usrData.res2.data.getAdress.user.userId,
            computerIP: usrData.res2.data.getAdress.user.computerIP,
            address: {
              id: usrData.res2.data.getAdress.userId,
              street: usrData.res2.data.getAdress.street,
              house: usrData.res2.data.getAdress.house,
              appartment: usrData.res2.data.getAdress.appartment,
              city: usrData.res2.data.getAdress.city,
              zipcode: usrData.res2.data.getAdress.zipcode,
            } ,
            programs: usrData.res2.data.getAdress.user.userPrograms,
            cards: usrData.res2.data.getAdress.user.cards,
            orders: [],
            recommendation: [],
            contact: [],
            userData: [],
            }));
            const profileNumber:string=usrData.res2.data.getAdress.userId.slice(0,1)
            const profile:string=usrData.res2.data.getAdress.user.name?usrData.res2.data.getAdress.user.name:"שלום"
            const profs:string[]=[]
      for (let index = 0; index < usrData?.res?.data?.getUserByEmail?.items.length; index++) {
          profs.push(usrData?.res?.data?.getUserByEmail?.items[index]?.name?
            usrData?.res?.data?.getUserByEmail?.items[index]?.name:"שלום");
      }
      dispatch(setCurrentProfile({currentProfile: profile, currentProfileNumber: profileNumber, profileList:  profs}))
      const programs:any[]=[]
      for (let index = 0; index < usrData?.res3.length; index++) {
        programs.push(usrData?.res3[index]?.data?.getUserProgram? 
          { userProgramId: usrData?.res3[index]?.data?.getUserProgram.userProgramId,
            programName: usrData?.res3[index]?.data?.getUserProgram.programName,
            email: usrData?.res3[index]?.data?.getUserProgram.email,
            isOpen: usrData?.res3[index]?.data?.getUserProgram.isOpen,
            expiredAt: usrData?.res3[index]?.data?.getUserProgram.expiredAt,
            treasure: usrData?.res3[index]?.data?.getUserProgram.treasure,
            currentStatus: usrData?.res3[index]?.data?.getUserProgram.currentStatus,
            nextQuestion: usrData?.res3[index]?.data?.getUserProgram.nextQuestion,
          }:"NA");
      }
      dispatch(setPrograms(programs))
    }
  }, [gotData]);

  return (
    <main>
      <h1>Profile Settings</h1>
      <button onClick={()=>navigate('/Courses')}>Courses Screen</button>
      <button onClick={()=>navigate('/LandingPage')}>Landing Page</button>
      <button onClick={()=>createProfile()}>Create New Profile</button>
    </main>
  );
}

export default ProfileSettings;