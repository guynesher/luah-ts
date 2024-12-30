import { Authenticator, Button, Flex, SearchField, SwitchField, Table, TableBody, TableCell, TableHead, TableRow } from '@aws-amplify/ui-react';
import {components} from '../../services/components'
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllUserPrograms, getAllUsers, selectItems, updateUserProgram } from '../../reducers/misSlice';
import getFromRestAPI from '../../actions/usersActions';

function UsersScreen() {
  const[show,setShow]=useState(false)
  const [mode, setMode]=useState<string>("users")
  const [eml, setEml]=useState<string>("")
  const [opn, setOpn]=useState<boolean>(false)
  const [lst, setLst]=useState<any>()
  const [newlist, setNewLst]=useState<any>()
  const [uplst, setUPLst]=useState<any>()
  const navigate=useNavigate()
  const dispatch = useAppDispatch()
  let usersList = useAppSelector(selectItems)

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
    if(usersList && mode==="users") {
      setLst([...usersList])
    }
    if(usersList && mode==="userPrograms") {
      setUPLst([...usersList])
    }
  }, [usersList,mode])

  function compareName( a:any, b:any) {
      if ( a.name < b.name ){ return -1 }
      if ( a.name > b.name ){return 1}
      return 0;
  }
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
  function compareProgramName( a:any, b:any) {
    if (a.currentStatus &&  b.currentStatus && JSON.parse(a.currentStatus).chapterIndex  < JSON.parse(b.currentStatus).chapterIndex ){ return -1 }
    if (!a.currentStatus &&  b.currentStatus ){ return -1 }
    if (a.currentStatus &&  b.currentStatus && JSON.parse(a.currentStatus).chapterIndex > JSON.parse(b.currentStatus).chapterIndex ){return 1}
    if (a.currentStatus &&  !b.currentStatus ){ return 1 }
    return 0;
  }
  // function compareProgramName( a:any, b:any) {
  //   if ( a.chapterAverage < b.chapterAverage ){ return -1 }
  //   if ( a.chapterAverage > b.chapterAverage ){return 1}
  //   return 0;
  // }

  const clickHandler = (list:string) => {
      if(list==="users") {dispatch(getAllUsers());setMode(list)}
      if(list==="userPrograms") {dispatch(getAllUserPrograms());setMode(list)}
      if(list==="statistics" && lst && uplst) { setMode(list)
        const groupedItems = lst.reduce((accumulator:any, item:any) => {
          const category = item.email;
          if (!accumulator[category]) {
            accumulator[category] = []
          }
          accumulator[category].push(item.createdAt);
          return accumulator
        }, {})
        const groupedItems2 = uplst.reduce((accumulator:any, item:any) => {
          const category = item.email;
          if (!accumulator[category]) {
            accumulator[category] = []
          }
          if(item.isOpen) accumulator[category].push(item.updatedAt);
          return accumulator
        }, {})
        const newlst:any[]=[]
        for (let index = 0; index < Object.keys(groupedItems).length; index++) {
          const ind=Object.keys(groupedItems2).findIndex((eml:any)=>eml===Object.keys(groupedItems)[index])
          let openPrg:number=0
          let daysFromLast:number=0
          if(ind||ind===0) {
            //# of open programs
            const len2:any=Object.values(groupedItems2)[ind]
            openPrg=Array.from(len2).length
            //how many days since Last time updated in any program
            let Last ="0"
            if(openPrg) Last= len2.reduce(function (a:any, b:any) { return a > b ? a : b; });
            daysFromLast=Math.ceil((Date.now()-Date.parse(Last))/86400000) 
          }
          const len:any=Object.values(groupedItems)[index]
          const min = len.reduce(function (a:any, b:any) { return a < b ? a : b; });
          newlst.push([Object.keys(groupedItems)[index],Array.from(len).length,min,openPrg,daysFromLast]);
        }
        setNewLst(newlst)
      }

      if(usersList && list==="date" && mode==="users") {setLst([...usersList].sort(compareDate))}
      if(usersList && list==="email" && mode==="users") {setLst([...usersList].sort(compareEmail))}
      if(usersList && list==="name" && mode==="users") {setLst([...usersList].sort(compareName))}
      if(lst && list==="reverse" && mode==="users") {const arr = lst.reverse(); setLst([...arr])}

      if(usersList && list==="date" && mode==="userPrograms") {setUPLst([...usersList].sort(compareDate))}
      if(usersList && list==="email" && mode==="userPrograms") {setUPLst([...usersList].sort(compareEmail))}
      if(usersList && list==="programName" && mode==="userPrograms") {setUPLst([...usersList].sort(compareProgramName))}
      if(uplst && list==="reverse" && mode==="userPrograms") {const arr = uplst.reverse(); setUPLst([...arr])}
      if(uplst && list==="open" && mode==="userPrograms") {
        const arr =uplst.filter((item: { isOpen: any; })=>item.isOpen); setUPLst([...arr])
      }
      if(uplst && list==="status" && mode==="userPrograms") {
        setTimeout(function () {
          {dispatch(getAllUserPrograms());setMode("userPrograms")}
        }, 2000); 
      }

      if(newlist && list==="send" && mode==="statistics") {
        async function sendEmail() {   
            await getFromRestAPI(["sendEmail"])          
        }
        sendEmail()
      }      

    }

  return (
    <Authenticator components={components}>
      {({}) => (
        <>
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
            <Flex direction="row">
            <Button className='btn' onClick={()=>clickHandler("users")}>רשימת משתמשים</Button>
            <Button className='btn' onClick={()=>clickHandler("userPrograms")}>רשימת תוכניות משתמשים</Button>
            <Button className='btn' onClick={()=>clickHandler("statistics")}>רשימת סטטיטיקה</Button>
            </Flex>
            </Flex>
          {mode==="users" && //usersList && //This is the CHAPTERS screen 
            <>
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
            <Flex direction="row">
            <Button className='btn' onClick={()=>clickHandler("date")}>סדר לפי תאריך </Button>
            <Button className='btn' onClick={()=>clickHandler("email")}>סדר לפי אימייל  </Button>
            <Button className='btn' onClick={()=>clickHandler("name")}>סדר לפי שם  </Button>
            <Button className='btn' onClick={()=>clickHandler("reverse")}>בסדר הפוך  </Button>
            <SearchField
              label="Search"
              placeholder="הכנס אימייל"
              onChange={(e)=>{e.preventDefault();setEml(e.target.value);
                    const arr =lst.filter((item: { email: any; })=>item.email===e.target.value); setLst([...arr])
              }}
              onClear={()=>setEml("")}
              value={eml}
            />
            </Flex>
            </Flex>
            <Table
              caption=""
              highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th"></TableCell>
                <TableCell as="th">ID </TableCell>
                <TableCell as="th">אי מייל </TableCell>
                <TableCell as="th">שם פרטי </TableCell>
                <TableCell as="th"> שם משפחה</TableCell>
                <TableCell as="th">טלפון</TableCell>
                <TableCell as="th">תאריך יצירה</TableCell>
                {/* <TableCell as="th">תאריך עדכון</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
            {lst && lst.map((itm: { userId: string;  isAdmin: any; email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; surname: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; phone: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; createdAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; updatedAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
              // {usersList && [...usersList].sort(compareName).map(itm => (
              <TableRow key={"key1"+itm.userId+Math.floor(Math.random()*9999)} className={itm.isAdmin?"adminTableRow":"tableRow"}>
                <TableCell>
                    {/* <VscEdit className={"iconBg"} onClick={() =>  {setItm(itm);setMode("chapter");}}/>
                    <VscAdd className={"iconBg"}/>
                    <VscRemove className={"iconBg"}/>   */}
                </TableCell>
                <TableCell >{itm.userId}</TableCell>
                <TableCell >{itm.email}</TableCell>
                <TableCell >{itm.name}</TableCell>
                <TableCell >{itm.surname}</TableCell>
                <TableCell >{itm.phone}</TableCell>
                <TableCell >{itm.createdAt}</TableCell>
                {/* <TableCell >{itm.updatedAt}</TableCell> */}
              </TableRow>
                ))}
            </TableBody>
          </Table>
          </>
          }
          {mode==="userPrograms" && //usersList && //This is the CHAPTERS screen 
            <>
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
            <Flex direction="row">
            <Button className='btn' onClick={()=>clickHandler("date")}>סדר לפי תאריך </Button>
            <Button className='btn' onClick={()=>clickHandler("email")}>סדר לפי אימייל  </Button>
            <Button className='btn' onClick={()=>clickHandler("programName")}>סדר לפי מצב נוכחי   </Button>
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
                <TableCell as="th">ID </TableCell>
                <TableCell as="th">אי מייל </TableCell>
                <TableCell as="th">שם תוכנית </TableCell>
                <TableCell as="th"> ממוצע </TableCell>
                <TableCell as="th">מצב נוכחי</TableCell>
                <TableCell as="th">שאלה הבאה</TableCell>
                <TableCell as="th">תאריך יצירה</TableCell>
                {/* <TableCell as="th">תאריך עדכון</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {uplst && uplst.map((itm: { userProgramId: string; isOpen: any; email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; programName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; chapterAverage: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; currentStatus: string; nextQuestion: string; createdAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; updatedAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
              
              <TableRow key={"key"+itm.userProgramId+Math.floor(Math.random()*9999)} className={itm.isOpen?"adminTableRow":"tableRow"}>
                <TableCell>
                    {/* <VscEdit className={"iconBg"} onClick={() =>  {setItm(itm);setMode("chapter");}}/>
                    <VscAdd className={"iconBg"}/>
                    <VscRemove className={"iconBg"}/>   */}
                  <SwitchField
                    id={"isOpen"+itm.userProgramId+Math.floor(Math.random()*9999)}
                    isDisabled={false}
                    label=""
                    labelPosition="end"
                    dir="ltr"
                    isChecked={itm.isOpen} 
                    onClick={(e)=>{e.preventDefault();
                      dispatch(updateUserProgram([itm.userProgramId,itm.isOpen?"false":"true"]));clickHandler("status")}}
                  /> 
                </TableCell>
                <TableCell >{itm.userProgramId}</TableCell>
                <TableCell >{itm.email}</TableCell>
                <TableCell >{itm.programName}</TableCell>
                <TableCell >{itm.chapterAverage}</TableCell>
                <TableCell >{itm.currentStatus?JSON.parse(itm.currentStatus).chapterIndex:""}</TableCell>
                <TableCell >{itm.nextQuestion?JSON.parse(itm.nextQuestion).userIndex:""}</TableCell>
                <TableCell >{itm.createdAt}</TableCell>
                {/* <TableCell >{itm.updatedAt}</TableCell> */}
              </TableRow>
                ))}
            </TableBody>
          </Table>
          </>
          }
          {mode==="statistics" && //usersList && //This is the CHAPTERS screen 
            <>
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
            <Flex direction="row">
            <Button className='btn' onClick={()=>clickHandler("send")}>שלח אימייל לכל הנרשמים שלא שילמו </Button>
            </Flex>
            </Flex>
            <Table
              caption=""
              highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th"></TableCell>
                <TableCell as="th">אי מייל </TableCell>
                <TableCell as="th"> מספר פרופילים </TableCell>
                <TableCell as="th"> תאריך הרשמה </TableCell>
                <TableCell as="th"> ימים שעברו מאז הרשמה </TableCell>
                <TableCell as="th"> מספר תוכניות פתוחות </TableCell>
                <TableCell as="th">ימים שעברו משימוש אחרון </TableCell>
                {/* <TableCell as="th">תאריך עדכון</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {newlist && newlist.map((itm:any,index:any) => (
              <TableRow key={"newlist"+index} className={itm[3]?"adminTableRow":"tableRow"}>
                <TableCell>
                    {/* <VscEdit className={"iconBg"} onClick={() =>  {setItm(itm);setMode("chapter");}}/>
                    <VscAdd className={"iconBg"}/>
                    <VscRemove className={"iconBg"}/>   */}
                </TableCell>
                <TableCell >{itm[0]}</TableCell>
                <TableCell >{itm[1]}</TableCell>
                <TableCell >{itm[2]}</TableCell>
                <TableCell >{itm[2]}</TableCell>
                <TableCell >{itm[3]}</TableCell>
                <TableCell >{itm[4]}</TableCell>
                {/* <TableCell >{itm.updatedAt}</TableCell> */}
              </TableRow>
                ))}
            </TableBody>
          </Table>
          </>
          }
     </> )}
      
    </Authenticator>
  );
}

export default UsersScreen