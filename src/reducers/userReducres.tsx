import {
    USER_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_FAIL,
    USER_CREATE_SUCCESS,
    USER_LOGOUT,
} from '../constants/userConstants'

interface UserAction {
    type: string;
    payload: any; // Define a more specific type if possible
}

export const userLoginReducer = (state = { userInfo: {}, userDetails: {},
            userAddress: {}, userSetting: {}, userPrograms: {}, 
            userCardsList: {}, loading: false, error: {} }, action: UserAction) => {

    switch (action.type) {
        case USER_REQUEST:
            return { ...state, loading: true }

        case USER_LOGIN_SUCCESS:
            return { ...state, loading: false, 
                userInfo: action.payload.userInfo,
                userDetails: action.payload.userDetails,
                userAddress: action.payload.userAddress,
                userSetting: action.payload.userSetting,
                userPrograms: action.payload.userPrograms,
                userCardsList: action.payload.userCards,
            }

        case USER_CREATE_SUCCESS:           
            return { ...state, loading: false, 
                userInfo: action.payload.userInfo,
                userDetails: action.payload.userDetails,
                userAddress: action.payload.userAddress,
                userSetting: action.payload.userSetting,
                userPrograms: action.payload.userPrograms,
                userCardsList: action.payload.userCards,
            }

        case USER_FAIL:
            return { ...state, loading: false, error: action.payload }

        case USER_LOGOUT:
            return { userInfo: {}, userDetails: {},
            userAddress: {}, userSetting: {}, userPrograms: {}, 
            userCardsList: {}, loading: false, error: {} }

        default:
            return state
    }
}