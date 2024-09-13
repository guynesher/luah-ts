import { type PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../store/createAppSlice"
import {  fetchUser } from "../actions/userAPI"

interface Address {
  id: string
  street: string
  house: string
  appartment: string
  city: string
  zipcode: string
}

interface Question {
  programId: string
  levelId: string
  chapterNumber: string []
  questionId: string
  permutationNumber: string
}

interface UserProgram {
  userProgramId: string
  programName: string
  email: string
  isOpen: string
  expiredAt: string
  treasure: string
  currentStatus: Question
  nextQuestion: Question
}

interface User {
  id: string
  cognitoUserName: String 
  name: string
  surname: string
  phone: string
  email: string 
  picture: string
  isAdmin: boolean
  sessionStart: string
  computerIP: String
  address: Address 
  programs: UserProgram []
  cards: [] 
  orders: []
  recommendation: []
  contact: []
  userData: []
}

export interface UserSliceState {
  user: User 
  status: "idle" | "loading" | "failed"
}

const current=new Date()
current.setHours(current.getHours() +3);

const initialState: UserSliceState = {
  user: {
    id: "",
    cognitoUserName: "",
    name: "",
    surname: "",
    phone: "",
    email: "" ,
    picture: "",
    isAdmin: false,
    sessionStart: current.toString(),
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
    userData: [],
  }, 
  status: "idle",
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const userSlice = createAppSlice({
  name: "Main",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    setName: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.user.name = action.payload
      },
    ),
    setSurname: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.user.surname = action.payload
      },
    ), 
    setUser: create.reducer(
      (state, action: PayloadAction<User>) => {
        state.user=action.payload
      },
    ),
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
    // will call the thunk with the `dispatch` function as the first argument. Async
    // code can then be executed and other actions can be dispatched. Thunks are
    // typically used to make async requests.
    setUserNameAsync: create.asyncThunk(
      async (name: string) => {
        const response = await fetchUser(name)
        return response.data
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.user.name = action.payload
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
  }),

  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectName: user => user.user.name,
    selectSurname: user => user.user.surname,
    selectStatus: user => user.status,
  },
})

// Action creators are generated for each case reducer function.
export const { setSurname, setName, setUser, setUserNameAsync} =
  userSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectName, selectSurname, selectStatus  } = userSlice.selectors

