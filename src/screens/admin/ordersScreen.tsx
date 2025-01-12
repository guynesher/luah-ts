import { Authenticator, Button, Flex, Table, TableBody, TableCell, TableHead, TableRow } from '@aws-amplify/ui-react';
import {components} from '../../services/components'
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllOrders, selectOrders } from '../../reducers/misSlice';

function OrdersScreen() {
  const[show,setShow]=useState(false)
  const [mode, setMode]=useState<string>("orders")
  const [clst, setCLst]=useState<any>()
  const navigate=useNavigate()
  const dispatch = useAppDispatch()
  let ordersList = useAppSelector(selectOrders)

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
    if(ordersList && mode==="orders") {
      setCLst([...ordersList])
    }
  }, [ordersList,mode])

  function compareDate( a:any, b:any) {
    if ( a.createdAt < b.createdAt ){ return -1 }
    if ( a.createdAt > b.createdAt ){return 1}
    return 0;
  }

  const clickHandler = (list:string) => {
      if(list==="orders") {dispatch(getAllOrders());setMode(list)}
      if(list==="answerEmail") {setMode(list)}
      if(ordersList && list==="date" && mode==="orders") {setCLst([...ordersList].sort(compareDate))}
      if(clst && list==="reverse" && mode==="orders") {const arr = clst.reverse(); setCLst([...arr])}
    }  

  return (
    <Authenticator components={components}>
      {({}) => (
        <>
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
            <Flex direction="row">
            <Button className='btn' onClick={()=>clickHandler("orders")}>רשימת הזמנות</Button>
            </Flex>
            </Flex>
          {mode==="orders" &&  
            <>
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
            <Flex direction="row">
            <Button className='btn' onClick={()=>clickHandler("date")}>סדר לפי תאריך </Button>
            <Button className='btn' onClick={()=>clickHandler("reverse")}>בסדר הפוך  </Button>
            </Flex>
            </Flex>
            <Table
              caption=""
              highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th">OrderID</TableCell>
                {/* <TableCell as="th">UserID </TableCell> */}
                <TableCell as="th">מספר הזמנה  </TableCell>
                <TableCell as="th">פרטי הזמנה  </TableCell>
                <TableCell as="th"> מחיר </TableCell>
                <TableCell as="th">תאריך יצירה</TableCell>
                {/* <TableCell as="th">תאריך עדכון</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {clst && clst.map((itm: { orderId: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; isDelivered: any; user: { userId: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; refNumber: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; billingDetails: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; totalPrice: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; createdAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; updatedAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
              <TableRow key={"key"+itm.orderId+Math.floor(Math.random()*9999)} className={itm.isDelivered?"adminTableRow":"tableRow"}>
                <TableCell >{itm.orderId}</TableCell>
                {/* <TableCell >{itm.user}</TableCell> */}
                <TableCell >{itm.refNumber}</TableCell>
                <TableCell >{itm.billingDetails}</TableCell>
                <TableCell >{itm.totalPrice}</TableCell>
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

export default OrdersScreen