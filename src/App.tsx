//import { useState } from 'react'
import './App.css'
import Login from './services/loginScreen';
import Data from './services/dataScreen';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import outputs from "../amplify_outputs.json";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Counter } from './components/Counter';
import HomeScreen from './screens/homeScreen';
import LandingPage from './screens/landingPage';
import CoursesScreen from './screens/courseScreen';
import Map1 from './screens/map1';
import Map2 from './screens/map2';
import QuestionScreen from './screens/questionScreen';
import AdminScreen from './screens/admin/adminScreen';
import AccountSettings from './screens/accountSettings';
import ProfileSettings from './screens/profileSettings';
import ShopScreen from './screens/shopScreen';
//import AdminUtilsScreen from './screens/admin/adminUtilsScreen';
//import ProgramsScreen from './screens/admin/programsScreen';
import TakanonScreen from './screens/takanonScreen';
import ShirScreen from './screens/shirScreen';
import PaymentScreen from './screens/paymentScreen';
import UserReport from './screens/userReport';
import SipurimScreen from './screens/sipurimScreen';
import FailScreen from './screens/failScreen';

const router = createBrowserRouter([
  { path: "/", element: <HomeScreen/>, },
  { path: "/LandingPage/", element: <LandingPage/>, },
  { path: "/Courses/", element: <CoursesScreen/>, },
  { path: "/CourseMap1/", element: <Map1/>, },
  { path: "/CourseMap2/", element: <Map2/>, },
  { path: "/Question/", element: <QuestionScreen/>, },
  { path: "/Admin/", element: <AdminScreen/>, },  
  { path: "/UserReport/*", element: <UserReport setMode={function (): void {
    throw new Error('Function not implemented.');
  } } itm={undefined} mode={'user'}/>, },  
    
  //{ path: "/AdminUtils/", element: <AdminUtilsScreen/>, },  
  { path: "/accountSettings/", element: <AccountSettings/>, }, 
  { path: "/profileSettings/", element: <ProfileSettings/>, }, 
  { path: "/ShopScreen/", element: <ShopScreen/>, },
  { path: "/Takanon/", element: <TakanonScreen/>, },
  { path: "/ShirScreen/", element: <ShirScreen/>, },
  { path: "/Payment/", element: <PaymentScreen/>, },
  { path: "/Sipurim/", element: <SipurimScreen/>, },
  { path: "/404/", element: <FailScreen/>, },

  { path: "/Login/", element: <Login/>, },
  { path: "/Data/", element: <Data/>, },
  { path: "/Counter/", element: <Counter/>, },
  { path: "*", element: <FailScreen/> },
]);

Amplify.configure(outputs);

function App() {
  //const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}/>
  );
}

export default App
