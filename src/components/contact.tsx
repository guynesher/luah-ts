import { useEffect, useState } from "react";
import { Button, Flex, Input, Label, Message, Text, TextAreaField } from "@aws-amplify/ui-react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createNewContact, selectActiveStatus, setActiveStatus } from "../reducers/misSlice";
import { selectUser } from "../reducers/userSlice";



        // contactId: a.id().required(),
        // user: a.belongsTo('User', 'userId'),
        // name: a.string(),
        // email: a.email(),
        // phone: a.phone(),
        // text: a.string(),
        // isAnswered: a.boolean(),
        // createdAt: a.timestamp(),
        // userId: a.id()
interface ScreenSize {
  width: number;
  height: number;
}

const Contact: React.FC<ScreenSize> = () => {
  const [text, setText] = useState<string>("");
  const [name, setName] = useState<string>();  
  const [email, setEmail] = useState<string>();
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [phone, setPhone] = useState<string>();
  const [newContact, setNewContact] = useState<boolean>(false);
  const dispatch = useAppDispatch()
  const lsUser = useAppSelector(selectUser)
  const status = useAppSelector(selectActiveStatus)

  useEffect(() => {
    if(status==="contactDone") {
        dispatch(setActiveStatus("contact"))
        setNewContact(true)
    }
  }, [status]);

function ValidateEmail(input:string) {
    var valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(valid)) {
        return true;
    } else { 
        return false
    }
  }
  
  const update= () => {
    const checkEmail=ValidateEmail(email?email:"")
    if(!checkEmail) setValidEmail(false)
    else {
        setValidEmail(true)
        dispatch(createNewContact([lsUser.id?lsUser.id:"X",name?name:"",email?email:"", phone?phone:"", text?text:""]))
    }
  }  

  return (
    <Flex direction={"row"} gap="large" justifyContent="center" margin="10px 10px">
      <Flex direction={"column"} 
            alignContent={"center"}
            width={{large:"50%",base:"100%"}}
            justifyContent="center"
            backgroundColor="purple.40"
            color="purple.100"
            style={{boxShadow:"10px 5px 5px gray",   borderRadius: "25px"}}>

            <Text     variation="primary"
              as="p"
              lineHeight="1.5em"
              fontWeight={400}
              fontSize="40px"
              fontStyle="normal"
              textDecoration="none"
              color="purple.100"
              width="100%">
                   טופס יצירת קשר
            </Text>
            {newContact &&
              <Flex direction="row" justifyContent={"center"}>
              <Message
                variation="filled"
                colorTheme="success"
                heading="ההודעה התקבלה">
                </Message>
              </Flex>   
                }
            <Flex direction={'column'} gap="large" justifyContent="center" margin="10px 10px">
                
              <Flex direction="row">
              <Label htmlFor="name" color="purple.100" width={"50%"} fontSize={"20px"}> שם </Label>
              <Input id="name" name="name" size="large" 
                    value={name?name:""} 
                    onChange={(e)=>setName(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="email" color="purple.100" width={"50%"} fontSize={"20px"}>  אי-מייל  </Label>
              <Input id="email" name="email" size="large"
                    value={email?email:""} 
                    onChange={(e)=>setEmail(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
                {!validEmail &&
              <Flex direction="row" justifyContent={"center"}>
              <Message
                variation="filled"
                colorTheme="error"
                heading="אי-מייל לא תקין">
                </Message>
              </Flex>   
                }
                <Flex direction="row">
                <Label htmlFor="phone" color="purple.100" width={"50%"} fontSize={"20px"}>  טלפון </Label>
                <Input id="phone" name="phone" size="large" 
                      value={phone?phone:""} 
                      onChange={(e)=>setPhone(e.target.value)}
                      width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
                </Flex>
                <Flex direction="row">
                <Label htmlFor="text" color="purple.100" width={"50%"} fontSize={"20px"}>  טקסט </Label>
                <TextAreaField
                    descriptiveText="רציתי לומר ש"
                    labelHidden={true}
                    label="צור קשר"
                    id="text" name="text" 
                    size="large"
                    placeholder=""
                    value={text?text:""} 
                    onChange={(e)=>setText(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"
                    rows={3}/>
                
                </Flex>
                <Flex direction="row" justifyContent={"center"}>
                <Button width={"50%"} backgroundColor="purple.20" 
                    color="purple.80"
                    onClick={()=>update()}>שלח טופס</Button>
                </Flex>
            </Flex> 
        </Flex>
      </Flex>
  );
}

export default Contact;