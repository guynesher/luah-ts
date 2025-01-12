import { Authenticator, Button, Card, Flex , Input, Label, SwitchField, Table, TableBody, TableCell, TableHead, TableRow, Text, TextAreaField } from '@aws-amplify/ui-react';
import {components} from '../../services/components'
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllContacts, selectContacts, updateContact } from '../../reducers/misSlice';
import getFromRestAPI from '../../actions/usersActions';

function ContactsScreen() {
  const[show,setShow]=useState(false)
  const [mode, setMode]=useState<string>("contacts")
  const [txt, setTxt]=useState<string>()
  const [opn, setOpn]=useState<boolean>(false)
  const [clst, setCLst]=useState<any>()
  const [citm, setCitm]=useState<any>()
  const navigate=useNavigate()
  const dispatch = useAppDispatch()
  let contactsList = useAppSelector(selectContacts)

  Hub.listen('auth', (data) => {
    if(!show && data.payload.event==="signedIn") {
      setShow(true)
      navigate("/Courses") 
    }
    if(!show && data.payload.event==="signedOut") {
      setShow(false) 
    }
  });

  useEffect(() => {
    if(contactsList && mode==="contacts") {
      setCLst([...contactsList])
    }
  }, [contactsList,mode])

  function compareDate( a:any, b:any) {
    if ( a.createdAt < b.createdAt ){ return -1 }
    if ( a.createdAt > b.createdAt ){return 1}
    return 0;
  }
  function compareEmail( a:any, b:any) {
    if ( a.email < b.email ){ return -1 }
    if ( a.email > b.email ){return 1}
    return 0;
  }

  const clickHandler = (list:string) => {
      if(list==="contacts") {dispatch(getAllContacts());setMode(list)}
      if(list==="answerEmail") {setMode(list)}
      if(contactsList && list==="date" && mode==="contacts") {setCLst([...contactsList].sort(compareDate))}
      if(contactsList && list==="email" && mode==="contacts") {setCLst([...contactsList].sort(compareEmail))}
      if(clst && list==="reverse" && mode==="contacts") {const arr = clst.reverse(); setCLst([...arr])}
      if(clst && list==="open" && mode==="contacts") {
        const arr =clst.filter((item: { isAnswered: any; })=>!item.isAnswered); setCLst([...arr])
      }  
    }

    const sendReturnMail = (body:string,contactId:string,recipient: string) => {
        async function sendEmail(recipient: string, subject: string, body: string) {   
          await getFromRestAPI(["sendEmail",recipient,subject,body])        
        }
        sendEmail(recipient,"תשובה להודעה שהשארת לנו באתר",body+"\n אנו מודים לך על פנייתך\n אתר לוח הוא אתר מונגש המיועד לכל ילד\n במידה ותרשם נשלח אליך דוח התקדמות שבועי של הילד ממנו תוכל ללמוד על התקדמותו של הילד\n אם אינך מעוניין לקבל מאיתנו אימיילים אנא ענה במייל חוזר למייל זה\n בבקשה הוציאו אותי מרשימת התפוצה\n תודה ויום טוב \n אתר לוח\n https://www.lu-ah.co.il/")
        .finally(()=>dispatch(updateContact([contactId])))
        setMode("")
        setTxt("")
      }      

  return (
    <Authenticator components={components}>
      {({}) => (
        <>
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
            <Flex direction="row">
            <Button className='btn' onClick={()=>clickHandler("contacts")}>רשימת קשרים</Button>
            </Flex>
            </Flex>
          {mode==="contacts" &&  
            <>
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
            <Flex direction="row">
            <Button className='btn' onClick={()=>clickHandler("date")}>סדר לפי תאריך </Button>
            <Button className='btn' onClick={()=>clickHandler("email")}>סדר לפי אימייל  </Button>
            <Button className='btn' onClick={()=>clickHandler("reverse")}>בסדר הפוך  </Button>
            <Button className='btn' onClick={()=>{setOpn(!opn);clickHandler("open")}}>להראות רק אם פתוח  </Button>
            </Flex>
            </Flex>
            <Table
              caption=""
              highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th"></TableCell>
                <TableCell as="th">ContactID </TableCell>
                <TableCell as="th">אי מייל </TableCell>
                <TableCell as="th">שם  </TableCell>
                <TableCell as="th"> טלפון </TableCell>
                <TableCell as="th"> הודעה</TableCell>
                <TableCell as="th">תאריך יצירה</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clst && clst.map((itm: { contactId: string ; isAnswered: boolean | undefined; userId: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; phone: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; createdAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; updatedAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
              
              <TableRow key={"key"+itm.contactId+Math.floor(Math.random()*9999)} className={itm.isAnswered?"adminTableRow":"tableRow"}>
                <TableCell>
                    {/* <VscEdit className={"iconBg"} onClick={() =>  {setItm(itm);setMode("chapter");}}/>
                    <VscAdd className={"iconBg"}/>
                    <VscRemove className={"iconBg"}/>   */}
                  <SwitchField
                    id={"isAnswered"+itm.contactId+Math.floor(Math.random()*9999)}
                    isDisabled={false}
                    label=""
                    labelPosition="end"
                    dir="ltr"
                    isChecked={itm.isAnswered} 
                    onClick={()=>{!itm.isAnswered?clickHandler("answerEmail"):null;setCitm(itm)}}
                  /> 
                </TableCell>
                <TableCell >{itm.contactId}</TableCell>
                <TableCell >{itm.email}</TableCell>
                <TableCell >{itm.name}</TableCell>
                <TableCell >{itm.phone}</TableCell>
                <TableCell >{itm.text}</TableCell>
                <TableCell >{itm.updatedAt}</TableCell>
              </TableRow>
                ))}
            </TableBody>
          </Table>
          </>
          }
          {mode==="answerEmail" && citm &&//usersList && //This is the CHAPTERS screen 
            <>
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
            <Flex direction="row">
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
                  width="100%">
                      פרטי הפונה
                </Text>
    
                <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
                </Flex>
                <Flex direction="row" margin="10px 10px">
                  <Label htmlFor="profileNumber" color="purple.100">מספר קשר</Label>
                  <Input id="profileNumber" name="profileNumber" isDisabled value={citm.contactId} size="small" 
                        width={{ base: '100%', large: '50%' }} backgroundColor="purple.20" color="purple.80"/>
                </Flex>
                  <Flex direction="row" margin="10px 10px">
                  <Label htmlFor="email1" color="purple.100">אי-מייל </Label>
                  <Input id="email1" name="email1" isDisabled value={citm.email} size="small" 
                        width={{ base: '100%', large: '50%' }} backgroundColor="purple.20" color="purple.80"/>
                  </Flex>                
                <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
                  <Flex direction="row">
                  <Label htmlFor="user_name" color="purple.100"> שם</Label>
                  <Input id="user_name" name="user_name" size="small" isDisabled value={citm.name} 
                        width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
                  </Flex>
                  <Flex direction="row">
                  <Label htmlFor="phone_num" color="purple.100"> טלפון</Label>
                  <Input id="phone_num" name="phone_num" size="small" value={citm.phone} isDisabled
                        width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
                  </Flex>
                </Flex>
                <Flex direction="row">
                  <TextAreaField
                      
                      label="ההודעה"
                      id="usertext" name="usertext" 
                      value={citm.text} isDisabled
                      width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"
                      rows={3}/>
                  </Flex>                
                <Text     variation="primary"
                  as="p"
                  lineHeight="1.5em"
                  fontWeight={400}
                  fontSize="1.5em"
                  fontStyle="normal"
                  textDecoration="none"
                  width="30vw">
                      אי מייל תגובה 
                </Text>
                <Flex direction="row">
                <TextAreaField
                    label="התגובה"
                    id="admintext" name="admintext" 
                    value={txt}
                    onChange={(e)=>setTxt(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"
                    rows={3}/>
                </Flex>  
                <Flex direction="row" gap="large" justifyContent="center" margin="30px">
                  <Button className='btn' style={{backgroundColor:"red"}}
                            onClick={()=>{txt? sendReturnMail(txt,citm.contactId,citm.email):setMode('contacts')}}> שלח אימייל </Button>
                  <Button className={"btn"} onClick={()=>{setMode('contacts');setCitm(null)}}>חזרה  </Button>
                </Flex>
              </Card>  

            </Flex>
            </Flex>
          </>
          }
     </> )}
      
    </Authenticator>
  );
}

export default ContactsScreen