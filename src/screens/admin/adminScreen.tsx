import { Authenticator, Tabs } from '@aws-amplify/ui-react';
import {components} from '../../services/components'
import {  useEffect, useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import AdminUtilsScreen from './adminUtilsScreen';
import ProgramsScreen from './programsScreen';
import { selectUser } from '../../reducers/userSlice';
import { useAppSelector } from '../../store/hooks';
import UsersScreen from './usersScreen';
import ContactsScreen from './contactsScreen';
import OrdersScreen from './ordersScreen';
import ReportsScreen from './reportsScreen';

function AdminScreen() {
  const[show,setShow]=useState(false)
  const navigate=useNavigate()
  const user = useAppSelector(selectUser)

  Hub.listen('auth', (data) => {
    if(!show && data.payload.event==="signedIn") {
      setShow(true)
      navigate("/Courses") 
    }
    if(!show && data.payload.event==="signedOut") {
      setShow(false) 
    }
  });

  //DB connections: 
  //Listen to current user changes + get user
  //check user.isAdmin? CRUD all DB : navigate(/Courses) 
  //Recheck in lambda if user belongs to "Admin" group !!!

    useEffect(() => {
      if(!user?.isAdmin) {
        navigate("/Courses")
      }
    }, [user])

  return (
    <Authenticator components={components}>
      {({}) => (
        <main>
          <Tabs
            justifyContent="space-evenly"
            defaultValue='Tab 1'
            items={[
              { label: 'תוכניות', value: 'Tab 1', content: <ProgramsScreen/> },
              { label: 'משתמשים', value: 'Tab 2', content: <UsersScreen/> },
              { label: 'קשרים', value: 'Tab 3', content: <ContactsScreen/> },
              { label: 'הזמנות', value: 'Tab 4', content: <OrdersScreen/> },
              { label: 'דוחות', value: 'Tab 5', content: <ReportsScreen/> },
              { label: 'UTILS', value: 'Tab 6', content: <AdminUtilsScreen/> },
            ]}
          />
        </main>
      )}
    </Authenticator>
  );
}

export default AdminScreen