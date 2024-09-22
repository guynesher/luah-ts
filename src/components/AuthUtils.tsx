import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectUser, setPrograms, setUser } from "../reducers/userSlice";
import getFromRestAPI from "../actions/usersActions";
import { selectProfile, setCurrentProfile } from "../reducers/misSlice";
import { PROGRAMS } from "../constants/userConstants";


export const AuthUtils = (user:any, email:any) => {
  const [usr, setUsr] = useState<string>();
  const [eml, setEmail] = useState<string>();
  const [getUsr, setGetUsr] = useState<boolean>(false);
  const [gotData, setGotData] = useState<boolean>(false);
  const [ip, setIp] = useState<string>()
  
  const [usrData, setData] = useState<any>(false);  
  const [distributed, setDistributed] = useState<boolean>(false);
  const lsUser = useAppSelector(selectUser)
  const lsProfile = useAppSelector(selectProfile)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if(user && email) { //If there was signIn it creates user and email for the Auth checks
      setEmail(user.email)
      setUsr(user.user)
    }
    if(lsUser.id==="" && usr && eml){ //If user signedIn get his details 
      setGetUsr(true); //Do only once
      if(lsUser.id!==lsProfile.currentProfile+usr){
      (async () => { 
        setData(await getFromRestAPI(["listUsersbyEmail",eml,usr,lsProfile.currentProfileNumber,ip?ip:"?",...PROGRAMS]))
        })()   
      }
    }
  }, [usr,eml,lsUser,getUsr]);
  
  useEffect(() => { //If there is no user in DB - first entrance case: create user 
    if(usrData)
    if(Object.keys(usrData?.res2).length>0) { setGotData(true) }
    else {
      (async () => { 
        setData(await getFromRestAPI(["createUser",eml,usr,lsProfile.currentProfileNumber,ip?ip:"?", ...PROGRAMS]))
        })() 
    }
  }, [gotData,usrData]);

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
  }, [gotData,ip]);

  useEffect(() => {
    if(!ip) getIp()
  }, [ip])

  const getIp = async () => {
    const response = await fetch("https://ipapi.co/json/")
    const data = await response.json()
    setIp(data.ip)
  }

  return (
    <>

    </>
  );
};