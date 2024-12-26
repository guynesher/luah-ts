import { Authenticator, Button, Flex, Table, TableBody, TableCell, TableHead, TableRow } from '@aws-amplify/ui-react';
import {components} from '../../services/components'
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllUserPrograms, getAllUsers, selectItems } from '../../reducers/misSlice';

function UsersScreen() {
  const[show,setShow]=useState(false)
  const [mode, setMode]=useState<string>("users")
  const [opn, setOpn]=useState<boolean>(false)
  const [lst, setLst]=useState<any>()
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
        console.log(JSON.parse(uplst[0].currentStatus).chapterIndex
        +"  "+JSON.parse(uplst[0].currentStatus).userIndex)
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
              <TableRow key={itm.userId} className={itm.isAdmin?"adminTableRow":"tableRow"}>
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
              
              <TableRow key={itm.userProgramId} className={itm.isOpen?"adminTableRow":"tableRow"}>
                <TableCell>
                    {/* <VscEdit className={"iconBg"} onClick={() =>  {setItm(itm);setMode("chapter");}}/>
                    <VscAdd className={"iconBg"}/>
                    <VscRemove className={"iconBg"}/>   */}
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
     </> )}
      
    </Authenticator>
  );
}

export default UsersScreen