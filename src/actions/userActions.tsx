// import {
//     USER_LOGOUT,
// } from '../constants/userConstants'
import {
    setUser,
  } from "../reducers/userSlice"
import { signOut } from 'aws-amplify/auth';

async function signOutFunc(): Promise<void> {
    try {
        await signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export const userLogout = () => async (dispatch: (action: { type: string }) => void): Promise<void> => {
    dispatch(setUser({
        id: "",
        cognitoUserName: "",
        name: "",
        surname: "",
        phone: "",
        email: "" ,
        picture: "",
        isRegistered: false,
        isAdmin: false,
        treasure: 0,
        sessionStart: new Date().toString(),
        computerIP: "",
        address: {
          id: "",
          street: "",
          house: "",
          appartment: "",
          city: "",
          zipcode: "",
        } ,
        programs: [],
        cards: [] ,
        orders: [],
        recommendation: [],
        contact: [],
        data: [],
        }));
    //dispatch({ type: USER_LOGOUT })
    // dispatch({ type: MIS_LOGOUT })
    // dispatch({ type: ORDER_LOGOUT })
    // dispatch({ type: PRODUCT_LOGOUT })
    // dispatch({ type: PROGRAM_LOGOUT })
    // dispatch({ type: ADMIN_LOGOUT })   
    // localStorage.setItem('lu-ah1', JSON.stringify({}));
    // localStorage.setItem('lu-ah2', JSON.stringify({}));
    // localStorage.setItem('lu-ah3', JSON.stringify({}));
    // localStorage.setItem('lu-ah4', JSON.stringify({}));
    // localStorage.setItem('lu-ah5', JSON.stringify({}));
    // localStorage.setItem('lu-ah6', JSON.stringify({}));
    // localStorage.setItem('lu-ah7', JSON.stringify({}));
    // localStorage.setItem('lu-ah8', JSON.stringify({}));
    signOutFunc();
}