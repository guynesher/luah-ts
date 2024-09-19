import { useEffect, useState } from "react";
//import { generateClient } from 'aws-amplify/data';
//import { type Schema } from '../../amplify/data/resource'
import getFromRestAPI from "../actions/usersActions";
//import { useAppDispatch } from "../store/hooks";
//import { setUser } from "../reducers/userSlice";

//const client = generateClient<Schema>();

export const AuthUtils = (user:any, email:any) => {
  const [usr, setUsr] = useState<string>();
  const [eml, setEmail] = useState<string>();
  const [getUsr, setGetUsr] = useState<boolean>(false);
  const [gotData, setGotData] = useState<boolean>(false);
  const [newUsrData, setNewUser] = useState<any>(false);
  //const dispatch = useAppDispatch()

  useEffect(() => {
    if(user && email) { //If there was signIn it creates user and email for the Auth checks
      setEmail(user.email)
      setUsr(user.user)
    }
    if(!getUsr && usr && eml){ //If user signedIn get his details 
      setGetUsr(true); //Do only once
      getUser("1"+usr)
      // (async () => {
      //   setNewUser(await getUser("1"+usr)) //get default profile - "1"
      //   })()   
    }
  }, [usr,eml]);
  
    async function getUser(userId:string) {
        // return await client.models.User.get({userId:userId})
        // .catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))
        const params:string[]=["getUser",userId]
        setNewUser(await getFromRestAPI(params)) 
      }

  useEffect(() => { //If there are user details put the details on the store 
    if(!gotData && newUsrData) {
      console.log(newUsrData)
      setGotData(true)
    }
  }, [gotData,newUsrData]);
              // if(u?.data) dispatch(setUser({
        //     id: u.data.userId,
        //     cognitoUserName: u.data.userId,
        //     name: u.data.userId,
        //     surname: u.data.userId,
        //     phone: u.data.userId,
        //     email: u.data.userId ,
        //     picture: u.data.userId,
        //     isAdmin: false,
        //     sessionStart: u.data.userId,
        //     computerIP: u.data.userId,
        //     address: {
        //       id: "",
        //       street: "",
        //       house: "",
        //       appartment: "",
        //       city: "",
        //       zipcode: "",
        //     } ,
        //     programs: [],
        //     cards: [] ,
        //     orders: [],
        //     recommendation: [],
        //     contact: [],
        //     userData: [],
        //     }));

  return (
    <>
    </>
  );
};