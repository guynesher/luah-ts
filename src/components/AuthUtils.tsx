import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectUser, setPrograms, setUser, setUserId } from "../reducers/userSlice";
import getFromRestAPI, { createUserWithAdressAndPrograms } from "../actions/usersActions";
import { selectProfile, setCurrentProfile } from "../reducers/misSlice";
import { PROGRAMS } from "../constants/userConstants";
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../amplify/data/resource'

const client = generateClient<Schema>();

export const AuthUtils = (user:any, email:any) => {
  const [usr, setUsr] = useState<string>();
  const [eml, setEmail] = useState<string>();
  const [ip, setIp] = useState<string>()
  const [usrData, setData] = useState<any>(null);  
  const lsUser = useAppSelector(selectUser)
  const lsProfile = useAppSelector(selectProfile)

  const dispatch = useAppDispatch()

   useEffect(() => {
     if(lsProfile?.currentProfileNumber!=="") { //If there was signIn it creates user and email for the Auth checks
       if(lsProfile.profileIndexList[lsProfile.profileList.indexOf(lsProfile?.currentProfile)] !== Number(lsUser.id.slice(0,1)))
         {
         dispatch(setUserId(""))
        }
     }
   }, [lsProfile]);

  useEffect(() => {
    if(user && email) { //If there was signIn it creates user and email for the Auth checks
      setEmail(user.email)
      setUsr(user.user)
    }
    if(lsUser?.id==="" && usr && eml){ //If user signedIn get his details 
      (async () => { 
        setData(await getFromRestAPI(["listUsersbyEmail",eml,usr,
          Number(lsProfile.currentProfileNumber)?lsProfile.currentProfileNumber:"1",ip?ip:"?",...PROGRAMS]))
        })()   
    }
  }, [usr,eml,lsUser]);
  
  useEffect(() => {
    if(!usrData) {
      client.models.UserProgram.onCreate({ //Lesten to create of userProgram at the end of create user 
                                            //to know that it is time to get the new user
        filter: {
          email: {
            eq: lsUser.email,
          },
        },
      }).subscribe({
        next: (data) => {
          (async () => {
            setData(await getFromRestAPI(["listUsersbyEmail",lsUser.email,lsUser.id.slice(1),
                                            data.userProgramId.slice(0,1),lsUser.computerIP,...PROGRAMS]))
            })() 
        },
        error: (error) => console.warn(error),
      });
      //return () => sub.unsubscribe();
    }
      if(!usrData) {
        client.models.User.onUpdate({ //Lesten to create of userProgram at the end of create user 
                                              //to know that it is time to get the new user
          filter: {
            email: {
              eq: lsUser.email,
            },
          },
        }).subscribe({
          next: (data) => {
            (async () => {
              setData(await getFromRestAPI(["listUsersbyEmail",lsUser.email,lsUser.id.slice(1),
                                              data.userId.slice(0,1),lsUser.computerIP,...PROGRAMS]))
              })() 
          },
          error: (error) => console.warn(error),
        });
    }
    }, [usrData]);

  useEffect(() => { //If there are user details put the details on the store 
    //console.log(usrData)
  if(usrData && Object.keys(usrData.res.data.getUserByEmail.items).length>0 && usrData.res2.data.getAdress) {
      
      dispatch(setUser({
            id: usrData.res2.data.getAdress.user.userId,
            cognitoUserName: usrData.res2.data.getAdress.user.cognitoUserName,
            name: usrData.res2.data.getAdress.user.name,
            surname: usrData.res2.data.getAdress.user.surname,
            phone: usrData.res2.data.getAdress.user.phone?usrData.res2.data.getAdress.user.phone:"",
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
            const profsIndex:number[]=[]
      for (let index = 0; index < usrData?.res?.data?.getUserByEmail?.items.length; index++) {
          profs.push(usrData?.res?.data?.getUserByEmail?.items[index]?.name?
            usrData?.res?.data?.getUserByEmail?.items[index]?.name:"שלום");
          profsIndex.push(usrData?.res?.data?.getUserByEmail?.items[index]?.userId?
              Number(usrData?.res?.data?.getUserByEmail?.items[index]?.userId.slice(0,1)):1);
      }
      dispatch(setCurrentProfile({currentProfile: profile, currentProfileNumber: profileNumber, 
                                    profileList:  profs, profileIndexList: profsIndex}))
      // console.log("currentProfile:", profile, "currentProfileNumber:", profileNumber, 
      //   "profileList:",  profs, "profileIndexList:", profsIndex)
      const programs:any[]=[]
      for (let index = 0; index < usrData?.res3.length; index++) {
        programs.push(usrData?.res3[index]?.data?.getUserProgram? 
          { userProgramId: usrData?.res3[index]?.data?.getUserProgram.userProgramId,
            programName: usrData?.res3[index]?.data?.getUserProgram.programName,
            email: usrData?.res3[index]?.data?.getUserProgram.email,
            isOpen: usrData?.res3[index]?.data?.getUserProgram.isOpen,
            expiredAt: usrData?.res3[index]?.data?.getUserProgram.expiredAt,
            treasure: usrData?.res3[index]?.data?.getUserProgram.treasure,
            chapterAverage: usrData?.res3[index]?.data?.getUserProgram?.chapterAverage?usrData?.res3[index]?.data?.getUserProgram?.chapterAverage:100,
            currentStatus: usrData?.res3[index]?.data?.getUserProgram.currentStatus,
            nextQuestion: usrData?.res3[index]?.data?.getUserProgram.nextQuestion,
          }:"NA");
      }
      dispatch(setPrograms(programs))
      setData(null)
    }
    if(usrData && Object.keys(usrData.res.data.getUserByEmail.items).length===0 && usr && eml) {
      setData(null)
      dispatch(setUser({
        id: "1"+usr,
        cognitoUserName: usr,
        name: "",
        surname: "",
        phone: "",
        email: eml,
        picture: "",
        isAdmin: false,
        sessionStart: "",
        computerIP: ip?ip:"?",
        address: {
          id: "1"+usr,
          street: "",
          house: "",
          appartment: "",
          city: "",
          zipcode: "",
        } ,
        programs: [],
        cards: [],
        orders: [],
        recommendation: [],
        contact: [],
        userData: [],
        }));
      createUserWithAdressAndPrograms([usr,eml,ip?ip:"?","1","","","","","","","","","", ...PROGRAMS])
    }
  }, [usrData]);

  useEffect(() => {
    if(!ip) getIp()
  }, [ip])

  const getIp = async () => {
    //const response = await fetch("https://ipapi.co/json/")
    //const data = await response.json()
    const data:any={ip:"?"}
    setIp(data.ip)
  }

  return (
    <>

    </>
  );
};