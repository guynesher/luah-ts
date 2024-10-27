import { type PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../store/createAppSlice"
import {  fetchUser } from "../actions/userAPI"
import { PROGRAMS } from "../constants/userConstants"
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../amplify/data/resource'

const client = generateClient<Schema>();

interface Address {
  id: string
  street: string
  house: string
  appartment: string
  city: string
  zipcode: string
}

interface Question {
  chapterDetails: any
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
  chapterAverage: number
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
  cards: string[] 
  orders: []
  recommendation: []
  contact: []
  userData: []
}

export interface UserSliceState {
  user: User 
  programs: UserProgram []
  status: "idle" | "loading" | "failed"
}

const current=new Date()
current.setHours(current.getHours() +3);

const ls: Record<string, any> | null = localStorage.getItem('luah-user') ? JSON.parse(localStorage.getItem('luah-user') as string) : null;
const progls: Record<string, any> | null = localStorage.getItem('luah-programs') ? JSON.parse(localStorage.getItem('luah-programs') as string) : null;
//console. log(ls)
const initialState: UserSliceState = {
  user: {
    id: ls?.id?ls.id:"",
    cognitoUserName: ls?.id?ls.cognitoUserName:"",
    name: ls?.id?ls.name:"",
    surname: ls?.id?ls.surname:"",
    phone: ls?.id?ls.phone:"",
    email: ls?.id?ls.email:"" ,
    picture: ls?.id?ls.picture:"",
    isAdmin: ls?.id?ls.isAdmin:"",
    sessionStart: ls?.id?ls.sessionStart:"",
    computerIP: ls?.id?ls.computerIP:"",
    address: {
      id: ls?.address?.id?ls.address.id:"",
      street: ls?.address?.id?ls.address.street:"",
      house: ls?.address?.id?ls.address.house:"",
      appartment: ls?.address?.id?ls.address.appartment:"",
      city: ls?.address?.id?ls.address.city:"",
      zipcode: ls?.address?.id?ls.address.zipcode:"",
    } ,
    programs: ls?.id?ls.programs:[],
    cards: ls?.id?ls.cards:[],
    orders: ls?.id?ls.programs:[],
    recommendation: ls?.id?ls.orders:[],
    contact: ls?.id?ls.contact:[],
    userData: ls?.id?ls.userData:[],
  }, 
  programs: progls?[progls[0],progls[1]]:[],
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
        localStorage.setItem('luah-user',JSON.stringify(state.user))
      },
    ),
    setPrograms: create.reducer(
      (state, action: PayloadAction<UserProgram[]>) => {
        state.programs=action.payload
        localStorage.setItem('luah-programs',JSON.stringify(state.programs))
      },
    ),
    updatePrograms: create.reducer(
      (state, action: PayloadAction<UserProgram[]>) => {
        state.programs=[...action.payload]
        localStorage.setItem('luah-programs',JSON.stringify(state.programs))
      },
    ),
    updateQuestion: create.reducer(
      (state, action: PayloadAction<string[]>) => {
        const progIndex=state.programs.findIndex((program)=>program.programName===action.payload[2])
        console.log(JSON.parse(action.payload[0]))
        //state.programs[progIndex].nextQuestion=
        console.log(JSON.stringify(JSON.parse(action.payload[1])),progIndex)
        //localStorage.setItem('luah-programs',JSON.stringify(state.programs))
      },
    ),
    setUserId: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.user.id = action.payload
        localStorage.setItem('luah-user',JSON.stringify(state.user))
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
        //localStorage.setItem('luah-user',JSON.stringify(state.user))
        //localStorage.setItem('luah-programs',JSON.stringify(state.programs))
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
    setCards: create.asyncThunk(
      async (params:string[]) => {
        client.models.User.update(
          { userId: params[3], cards: JSON.parse(params[6])},
        ).catch((error: any)=>console.log('GET call failed: ',error))
        client.models.UserProgram.update(
          { userProgramId: params[4], treasure: Number(params[5])-Number(params[1])},
        ).catch((error: any)=>console.log('GET call failed: ',error))
        return params
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          state.user.cards=[...state.user.cards,action.payload[0]]
          const prog:number=Number(action.payload[2])
          const progIndex=state.programs.findIndex((program)=>program.programName===PROGRAMS[prog])
          state.programs[progIndex].treasure=(Number(state.programs[0].treasure)-Number(action.payload[1])).toString()
          localStorage.setItem('luah-user',JSON.stringify(state.user))
          localStorage.setItem('luah-programs',JSON.stringify(state.programs))
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
    setActive: create.asyncThunk(
      async (param:string) => {    
        const now="100"
        client.models.UserProgram.update(
          { userProgramId: param, expiredAt: Number(now)},
        ).catch((error: any)=>console.log('GET call failed: ',error))
        return [now,param]
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          const progIndex=state.programs.findIndex((program)=>program.userProgramId===action.payload[1])
          state.programs[progIndex].expiredAt=action.payload.toString()
          localStorage.setItem('luah-programs',JSON.stringify(state.programs))
        },
        rejected: state => {
          state.status = "failed"
        },
      },
    ),
    getPrograms: create.asyncThunk(
      async (param:string) => { 
        const currentPrograms= await client.models.UserProgram.get(
          { userProgramId: param},
        ).catch((error: any)=>console.log('GET call failed: ',error))
        if(!currentPrograms?.data?.isOpen){
          await client.models.UserProgram.update(
            { userProgramId: param, expiredAt: 100},
          ).catch((error: any)=>console.log('GET call failed: ',error))
          if(currentPrograms?.data?.programName===PROGRAMS[0]){ 
            window.open(
            'https://mrng.to/I6wUoZNVYt',
            '_blank' // <- This is what makes it open in a new window.
            );
          }
        }
        return currentPrograms
      },
      {
        pending: state => {
          state.status = "loading"
        },
        fulfilled: (state, action) => {
          state.status = "idle"
          const params:any=action.payload?.data
          const ind=progls?.findIndex((prog:any)=>prog.userProgramId===params.userProgramId)
          state.programs[ind].chapterAverage=params.chapterAverage
          state.programs[ind].currentStatus=params.currentStatus
          state.programs[ind].email=params.email
          state.programs[ind].expiredAt=params.isOpen?params.expiredAt:100
          state.programs[ind].isOpen=params.isOpen
          state.programs[ind].nextQuestion=params.nextQuestion
          state.programs[ind].programName=params.programName
          state.programs[ind].treasure=params.treasure
          state.programs[ind].userProgramId=params.userProgramId
          localStorage.setItem('luah-programs',JSON.stringify(state.programs))
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
    selectUser: user => user.user,
    selectPrograms: user => user.programs,
    SelectUserId: user => user.user.id
  },
})

// Action creators are generated for each case reducer function.
export const { setSurname, setName, setUser, setUserNameAsync, setPrograms, setUserId, updatePrograms, 
  updateQuestion, setCards, setActive, getPrograms} = userSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectName, selectSurname, selectStatus, selectUser, selectPrograms, SelectUserId } = userSlice.selectors

