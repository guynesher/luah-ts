import { useNavigate } from "react-router-dom";
import { createUserWithAdressAndPrograms, updateUserWithAdress } from "../actions/usersActions";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectActiveStatus, selectProfile, setActiveStatus } from "../reducers/misSlice";
import { selectUser, setUser } from "../reducers/userSlice";
import { PROGRAMS } from "../constants/userConstants";
//import { useEffect, useState } from "react";
import { Authenticator, Button, Card, Flex, Grid, Input, Label, Text } from "@aws-amplify/ui-react";
import { AuthUtils } from "../components/AuthUtils";
import { Header } from "../components/Header";
import {components} from '../services/components'
import { useEffect, useState } from "react";

function ProfileSettings() {
  const navigate=useNavigate()
  const lsProfile = useAppSelector(selectProfile)
  const lsUser = useAppSelector(selectUser)
  const [username, setUsername] = useState<string>("");  
  const [surname, setSurname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");  
  const [picture, setPicture] = useState<string>("");
  const [street, setStreet] = useState<string>("");  
  const [house, setHouse] = useState<string>("");
  const [appartment, setAppartment] = useState<string>("");
  const [city, setCity] = useState<string>("");  
  const [zipcode, setZipcode] = useState<string>("");
  const activeStt = useAppSelector(selectActiveStatus)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(activeStt!=="") { //If there was signIn it creates user and email for the Auth checks
      //console.log(activeStt)
      //if(activeStt==="Update")console.log(activeStt)
      if(activeStt==="Create") {
        setTimeout(function () {
        dispatch(setUser({
        id: activeStt,cognitoUserName: lsUser.cognitoUserName.toString(), name: "", surname: "",phone: "", 
        email: lsUser.email , picture: "", 
        isAdmin: false, sessionStart: new Date().toString(), computerIP: lsUser.computerIP.toString(), 
        address: { id: "", street: "", house: "", appartment: "", city: "", zipcode: "", } ,
        programs: [], cards: [], orders: [], recommendation: [], contact: [], userData: [],}));
        dispatch(setActiveStatus(""))
      }, 1500);}
      if(activeStt==="Update") {
        setTimeout(function () {
        dispatch(setActiveStatus(""))
      }, 1500);}
    }
  }, [activeStt,lsUser]);
  //DB connections: 
  //Create New Profile/Update profile
  const  profileUpdate= () => {
    const newProfileNumber:string=(lsProfile?.profileList?.length+1).toString()
    //const currentProfileNumber:string=lsUser.id.slice(0,1)
    if(Number(newProfileNumber)<=9) {
      const params:string[]=[
        lsUser.cognitoUserName.toString(),
        lsUser.email,
        lsUser.computerIP.toString(),
        (lsProfile.currentProfileNumber!=="" && lsUser?.id!=="Create")?lsProfile.currentProfileNumber:newProfileNumber,
        username,surname,phone,picture,street,house,appartment,city,zipcode,
        ...PROGRAMS]
        //console.log(params)
        if(lsUser?.id==="Create")createUserWithAdressAndPrograms(params)
        else updateUserWithAdress(params)
      navigate('/Courses')
    }
  }
  return (
    <Authenticator components={components}>
    {({user}) => (
      <Flex direction={"column"}>
        <AuthUtils email={user?.signInDetails?.loginId} user={user?.userId}/>
        <Header></Header>
        <Grid
          columnGap="0.5rem"
          rowGap="0.5rem"
          templateColumns="1fr 1fr 1fr"
          templateRows="1fr 3fr 1fr"
        >
          <Card
            columnStart="1"
            columnEnd="-1"
            backgroundColor="purple.40"
          >
            <Text     variation="primary"
              as="p"
              lineHeight="1.5em"
              fontWeight={400}
              fontSize="2em"
              fontStyle="normal"
              textDecoration="none"
              width="30vw">
                  עדכון פרופיל
            </Text>
            <Flex direction="row" gap="medium" margin="40px">
              <Label htmlFor="profileNumber" color="purple.100">מספר פרופיל</Label>
              <Input id="profileNumber" name="profileNumber" isDisabled value={lsUser?.id} size="small" 
                    width={{ base: '100%', large: '40%' }} backgroundColor="purple.20" color="purple.80"/>
            </Flex>
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
              <Flex direction="row">
              <Label htmlFor="user_name" color="purple.100" width={"50%"}> שם</Label>
              <Input id="user_name" name="user_name" size="large" placeholder={lsUser.name}
                    value={username} 
                    onChange={(e)=>setUsername(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="surname" color="purple.100" width={"50%"}> שם משפחה</Label>
              <Input id="surname" name="surname" size="large" placeholder={lsUser.surname}
                    value={surname} 
                    onChange={(e)=>setSurname(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="phone_num" color="purple.100" width={"50%"}> טלפון</Label>
              <Input id="phone_num" name="phone_num" size="large" placeholder={lsUser.phone}
                    value={phone} 
                    onChange={(e)=>setPhone(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="piccolor" color="purple.100" width={"50%"}> צבע פרופיל </Label>
              <Input id="piccolor" name="piccolor" size="large" placeholder={lsUser.picture}
                    value={picture} 
                    onChange={(e)=>setPicture(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
            </Flex>
            <Text     variation="primary"
              as="p"
              lineHeight="1.5em"
              fontWeight={400}
              fontSize="1.5em"
              fontStyle="normal"
              textDecoration="none"
              width="30vw">
                  כתובת 
            </Text>
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px">
              <Flex direction="row">
              <Label htmlFor="city" color="purple.100" width={"50%"}> עיר</Label>
              <Input id="city" name="city" size="large" placeholder={lsUser.address.city}
                    value={city} 
                    onChange={(e)=>setCity(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="street" color="purple.100" width={"50%"}> רחוב</Label>
              <Input id="street" name="street" size="large" placeholder={lsUser.address.street}
                    value={street} 
                    onChange={(e)=>setStreet(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="house" color="purple.100" width={"50%"}>  בית</Label>
              <Input id="house" name="house" size="large" placeholder={lsUser.address.house}
                    value={house} 
                    onChange={(e)=>setHouse(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="appartment" color="purple.100" width={"50%"}> דירה</Label>
              <Input id="appartment" name="appartment" size="large" placeholder={lsUser.address.appartment}
                    value={appartment} 
                    onChange={(e)=>setAppartment(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="zipcode" color="purple.100" width={"50%"}>  מיקוד </Label>
              <Input id="zipcode" name="zipcode" size="large" placeholder={lsUser.address.zipcode}
                    value={zipcode} 
                    onChange={(e)=>setZipcode(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
            </Flex>
            <Flex direction="row" gap="large" justifyContent="center" margin="30px">
              <Button type="submit" onClick={()=>profileUpdate()}>עדכון פרטים</Button>
              <Button onClick={()=>navigate('/Courses')}>חזרה  </Button>
            </Flex>
          </Card>
          <Card
            columnStart="1"
            columnEnd="-1"
          >      
          </Card>
        </Grid>
      </Flex>
        )}
      </Authenticator>
  );
}

export default ProfileSettings;