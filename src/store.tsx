
import { combineReducers } from 'redux'
//import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
//import {thunk} from 'redux-thunk'
//import { composeWithDevTools } from '@redux-devtools/extension'
import { userLoginReducer } from './reducers/userReducres'
// import { userMisReducer } from './reducers/misReducers'
// import { userOrderReducer } from './reducers/orderReducers'
// import { productsReducer } from './reducers/productReducers'
// import { programReducer } from './reducers/programReducers'
// import { adminReducer } from './reducers/adminReducers'

const reducers = combineReducers({
    userLogin: userLoginReducer,
    // userMis: userMisReducer,
    // userOrder: userOrderReducer,
    // products: productsReducer,
    // programs: programReducer,
    // admin: adminReducer,
});

// const cognitoUserFromStorage = localStorage.getItem('lu-ah1') ?
//     JSON.parse(localStorage.getItem('lu-ah1')) : {}
// interface UserLoginState {
//     userInfo: Record<string, unknown>;
//     userDetails: Record<string, unknown>;
//     userAddress: Record<string, unknown>;
//     userSetting: Record<string, unknown>;
//     userPrograms: Record<string, unknown>;
//     userCardsList: Record<string, unknown>;
//     loading: boolean;
//     error: Record<string, unknown>;
// }

//interface InitialState {
//    userLogin: UserLoginState;
    // userMis: {
    //     recommendations: Record<string, unknown>;
    //     success: Record<string, unknown>;
    //     screen: Record<string, unknown>;
    //     buttons: Record<string, unknown>;
    //     audio: boolean;
    //     cognitoUser: unknown; // Replace with appropriate type
    //     usermail: unknown; // Replace with appropriate type
    //     link: Record<string, unknown>;
    //     page: Record<string, unknown>;
    //     pages: Record<string, unknown>;
    //     loading: boolean;
    //     error: Record<string, unknown>;
    //     massage: Record<string, unknown>;
    // };
//}

// const initialState: InitialState = {  
//      userLogin: {userInfo: {},  userDetails: {},
//              userAddress: {}, userSetting: {}, 
//              userPrograms: {}, 
//              userCardsList: {}, loading: false, error: {}
//     },
    // userMis:{ recommendations: {}, success: {}, screen: {}, buttons: {}, audio: false,
    //           cognitoUser:cognitoUserFromStorage,  usermail:userMailFromStorage,
    //           link:{}, page: {}, pages: {}, loading: false, error: {}, massage: {}},
//}

//const middleware = [thunk]

const store = configureStore ({ reducer: reducers , //preloadedState: initialState, 
    devTools: process.env.NODE_ENV !== 'production',
    //devTools: false,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //thunk: true,
      serializableCheck: false,
      immutableCheck: false,
    })},
    //composeWithDevTools(applyMiddleware(...middleware))
)

export default store