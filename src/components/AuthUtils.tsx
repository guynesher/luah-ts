import { useEffect, useState } from "react";
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../amplify/data/resource'
//import getFromRestAPI from "../actions/usersActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setUser, selectUser } from "../reducers/userSlice";
import getFromRestAPI, { createUserWithAdressAndPrograms } from "../actions/usersActions";
import { selectProfile } from "../reducers/misSlice";

const client = generateClient<Schema>();

export const AuthUtils = (user:any, email:any) => {
  const [usr, setUsr] = useState<string>();
  const [eml, setEmail] = useState<string>();
  const [getUsr, setGetUsr] = useState<boolean>(false);
  const [gotData, setGotData] = useState<boolean>(false);
  const [usrCreate, setUserCreate] = useState<boolean>(true);
  const [newUsrData, setNewUser] = useState<any>(false);
  const [usrAddress, setNewAdress] = useState<any>(false);
  const [ip, setIp] = useState<string>()
  const [profile, setProfile] = useState<string>();
  const [changeProfile, setChangeProfile] = useState<boolean>(false);
  const lsUser = useAppSelector(selectUser)
  const lsProfile = useAppSelector(selectProfile)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if(getUsr && !newUsrData?.data && !usrCreate){
    //const sub = 
    client.models.UserProgram.onCreate({ //Lesten to create of userProgram at the end of create user 
                                          //to know that it is time to get the new user
      filter: {
        email: {
          eq: eml,
        },
      },
    }).subscribe({
      next: (data) => {
        setGetUsr(false);
        console.log(data)
        setProfile(data.userProgramId.slice(0,1))
        if(data.userProgramId.slice(0,1)!==lsUser.id.slice(0,1)){ //Check if profile changed -> setChangeProfile(true) 
          setChangeProfile(true)
        }
      },
      error: (error) => console.warn(error),
    });
    //return () => sub.unsubscribe();
  }
  }, [getUsr,newUsrData,usrCreate]);

  useEffect(() => {
    if(user && email) { //If there was signIn it creates user and email for the Auth checks
      setEmail(user.email)
      setUsr(user.user)
    }
    if(!getUsr && usr && eml){ //If user signedIn get his details 
      setGetUsr(true); //Do only once
      //console.log("getUser",usr,lsUser)
      //if(lsUser.id.slice(1)!==usr) { //Get defualt user only if we don't have the same Cognito user in local storage 
      if(lsUser.id!==lsProfile.currentProfile+usr){
      (async () => { 
        //setNewUser(await getUser("1"+usr)) //get default profile - "1"
        //setNewAdress(await getAddress("1"+usr)) //get default profile - "1"
        //
        console.log(await getFromRestAPI(["listUsersbyEmail",usr+eml,usr,lsProfile.currentProfile]))
        })()   
      }
      if(changeProfile) { //Get user profile only if change profile is on 
        (async () => { 
          setChangeProfile(false)
          setNewUser(await getUser(profile+usr)) //get default profile - "1"
          setNewAdress(await getAddress(profile+usr)) //get default profile - "1"
          })()   
        }
    }
  }, [usr,eml,lsUser,getUsr]);
  
    async function getUser(userId:string) {
         return await client.models.User.get({userId:userId})
         .catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))
      }
    
    async function getAddress(userId:string) {
      return await client.models.Adress.get({userId:userId})
      .catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))
    }

  useEffect(() => { //If there is no user in DB - first entrance case: create user 
    if(getUsr && newUsrData && usrCreate) 
    { setUserCreate(false) 
      if(!newUsrData.data) {
        const params:string[]=[
          usr?usr:"NA",
          eml?eml:"NA",
          ip?ip:"?",
          "1", //Profile Number
          "252b1d21-8edb-471c-8d0f-600bcecfb2c5",
          "b8eb0d56-8495-479e-ba07-ad4cd5e7b08c"
        ]
        console.log(params)
        createUserWithAdressAndPrograms(params)
      }
    }
  }, [gotData,newUsrData,usrCreate]);

  useEffect(() => { //If there are user details put the details on the store 
    if(!gotData && newUsrData?.data && usrAddress?.data ) {
      setGotData(true)
      //console.log(newUsrData)
      dispatch(setUser({
            id: newUsrData.data.userId,
            cognitoUserName: newUsrData.data.cognitoUserName,
            name: newUsrData.data.name,
            surname: newUsrData.data.surname,
            phone: newUsrData.data.phone,
            email: newUsrData.data.email ,
            picture: newUsrData.data.picture,
            isAdmin: false,
            sessionStart: newUsrData.data.userId,
            computerIP: ip?ip:"NA",
            address: {
              id: usrAddress.data.userId,
              street: usrAddress.data.street,
              house: usrAddress.data.house,
              appartment: usrAddress.data.appartment,
              city: usrAddress.data.city,
              zipcode: usrAddress.data.zipcode,
            } ,
            programs: newUsrData.data.userPrograms,
            cards: newUsrData.data.cards,
            orders: [],
            recommendation: [],
            contact: [],
            userData: [],
            }));
    }
  }, [gotData,newUsrData,usrAddress,ip]);

  useEffect(() => {
    if(!ip) getIp()
  }, [ip])

  const getIp = async () => {
    const response = await fetch("https://ipapi.co/json/")
    const data = await response.json()
    setIp(data.ip)
  }

  
      // async function getUser(userId:string) { //Get from REST API
      //   const params:string[]=["getUser",userId]
      //   setNewUser(await getFromRestAPI(params)) 
      // }

  return (
    <>

    </>
  );
};