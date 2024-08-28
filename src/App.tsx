//import { useState } from 'react'
import './App.css'
import Login from './screens/loginScreen';
import Data from './screens/dataScreen';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import outputs from "../amplify_outputs.json";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Counter } from './components/Counter';

const router = createBrowserRouter([
  {
    path: "/Login/",
    element: <Login/>,
  },
  {
    path: "/",
    element: <Data/>,
  },
  {
    path: "/Counter/",
    element: <Counter/>,
  },
]);

Amplify.configure(outputs);

function App() {
  //const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router}/>
  );
}

export default App
