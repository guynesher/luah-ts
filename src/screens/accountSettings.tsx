import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { selectProfile } from "../reducers/misSlice";
import { selectUser } from "../reducers/userSlice";
import { Authenticator, Button, Card, Flex, Input, Label, Text } from "@aws-amplify/ui-react";
import { AuthUtils } from "../components/AuthUtils";
import { Header } from "../components/Header";
import {components} from '../services/components'
import { useState } from "react";
import { Hub } from 'aws-amplify/utils';

function AccountSettings() {
  const navigate=useNavigate()
  const lsProfile = useAppSelector(selectProfile)
  const lsUser = useAppSelector(selectUser)
  const[show,setShow]=useState(false)

  Hub.listen('auth', (data) => {
    if(!show && data.payload.event==="signedIn") {
      setShow(true) 
      navigate("/Courses") 
    }
    if(!show && data.payload.event==="signedOut") {
      setShow(false) 
    }
  });

  return (
    <Authenticator components={components}>
    {({user}) => (
      <Flex direction={"column"}>
        <AuthUtils email={user?.signInDetails?.loginId} user={user?.userId}/>
        <Header></Header>
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
                  פרטי חשבון
            </Text>

            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
            <Flex direction="row">
              <Label htmlFor="more" color="purple.100" width={"100%"}> פרופילים לאי מייל זה</Label>
              {lsProfile.profileList? lsProfile.profileList.map((profile)=>
                    <Input id={profile} name={profile} size="large" isDisabled value={profile} 
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              ):<></>
              }
            </Flex>
            </Flex>
            <Flex direction="row" gap="medium" margin="40px">
              <Label htmlFor="profileNumber" color="purple.100">מספר פרופיל</Label>
              <Input id="profileNumber" name="profileNumber" isDisabled value={lsUser?.id} size="small" 
                    width={{ base: '100%', large: '40%' }} backgroundColor="purple.20" color="purple.80"/>
            </Flex>
            <Flex direction="row" gap="medium" margin="40px">
              <Label htmlFor="email" color="purple.100">אי-מייל </Label>
              <Input id="email" name="email" isDisabled value={lsUser?.email} size="small" 
                    width={{ base: '100%', large: '40%' }} backgroundColor="purple.20" color="purple.80"/>
            </Flex>
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
              <Flex direction="row">
              <Label htmlFor="user_name" color="purple.100" width={"50%"}> שם</Label>
              <Input id="user_name" name="user_name" size="large" isDisabled value={lsUser.name} 
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="surname" color="purple.100" width={"50%"}> שם משפחה</Label>
              <Input id="surname" name="surname" size="large" isDisabled value={lsUser.surname}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="phone_num" color="purple.100" width={"50%"}> טלפון</Label>
              <Input id="phone_num" name="phone_num" size="large" value={lsUser.phone} isDisabled
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
              <Input id="city" name="city" size="large" value ={lsUser.address.city} isDisabled
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="street" color="purple.100" width={"50%"}> רחוב</Label>
              <Input id="street" name="street" size="large" value={lsUser.address.street} isDisabled
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="house" color="purple.100" width={"50%"}>  בית</Label>
              <Input id="house" name="house" size="large" value={lsUser.address.house} isDisabled
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="appartment" color="purple.100" width={"50%"}> דירה</Label>
              <Input id="appartment" name="appartment" size="large" value={lsUser.address.appartment} isDisabled

                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="zipcode" color="purple.100" width={"50%"}>  מיקוד </Label>
              <Input id="zipcode" name="zipcode" size="large" value={lsUser.address.zipcode} isDisabled
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
            </Flex>
            <Flex direction="row" gap="large" justifyContent="center" margin="30px">
              <Button className={"btn"} onClick={()=>navigate('/Courses')}>חזרה  </Button>
            </Flex>
          </Card>
      </Flex>
        )}
      </Authenticator>
  );
}

export default AccountSettings;