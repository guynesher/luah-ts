import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { selectUser } from "../reducers/userSlice";
import getFromRestAPI from "../actions/usersActions";
import { selectProfile } from "../reducers/misSlice";


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

  //const dispatch = useAppDispatch()

  useEffect(() => {
    if(user && email) { //If there was signIn it creates user and email for the Auth checks
      setEmail(user.email)
      setUsr(user.user)
    }
    if(!getUsr && usr && eml){ //If user signedIn get his details 
      setGetUsr(true); //Do only once
      if(lsUser.id!==lsProfile.currentProfile+usr){
      (async () => { 
        setData(await getFromRestAPI(["listUsersbyEmail",eml,usr,lsProfile.currentProfileNumber,ip?ip:"?",
          "252b1d21-8edb-471c-8d0f-600bcecfb2c5","b8eb0d56-8495-479e-ba07-ad4cd5e7b08c"]))
        })()   
      }
    }
  }, [usr,eml,lsUser,getUsr]);
  
  useEffect(() => { //If there is no user in DB - first entrance case: create user 
    if(usrData)
    if(Object.keys(usrData?.res2).length>0) { setGotData(true) }
    else {
      (async () => { 
        setData(await getFromRestAPI(["createUser",eml,usr,lsProfile.currentProfileNumber,ip?ip:"?",
          "252b1d21-8edb-471c-8d0f-600bcecfb2c5","b8eb0d56-8495-479e-ba07-ad4cd5e7b08c"]))
        })() 
    }
  }, [gotData,usrData]);

  useEffect(() => { //If there are user details put the details on the store 
  if(gotData && !distributed) {
      setDistributed(true)
      console.log(usrData)
      // dispatch(setUser({
      //       id: newUsrData.data.userId,
      //       cognitoUserName: newUsrData.data.cognitoUserName,
      //       name: newUsrData.data.name,
      //       surname: newUsrData.data.surname,
      //       phone: newUsrData.data.phone,
      //       email: newUsrData.data.email ,
      //       picture: newUsrData.data.picture,
      //       isAdmin: false,
      //       sessionStart: newUsrData.data.userId,
      //       computerIP: ip?ip:"NA",
      //       address: {
      //         id: usrAddress.data.userId,
      //         street: usrAddress.data.street,
      //         house: usrAddress.data.house,
      //         appartment: usrAddress.data.appartment,
      //         city: usrAddress.data.city,
      //         zipcode: usrAddress.data.zipcode,
      //       } ,
      //       programs: newUsrData.data.userPrograms,
      //       cards: newUsrData.data.cards,
      //       orders: [],
      //       recommendation: [],
      //       contact: [],
      //       userData: [],
      //       }));
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