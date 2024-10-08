import { type PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../store/createAppSlice"
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../amplify/data/resource'

const client = generateClient<Schema>();

interface Item {
    "itemId": string
    "questionId": string
    "questionNumber": number
    "itemNumber": number
    "itemType": string
    "itemPosition": [string,string]
    "itemSize": [string,string]
    "itemCondition": [any,any]
    "step": number
    "loop": boolean
    "autoplay": boolean
    "animationName": string
    "animation": any
    "isAudioPlay": boolean
    "isAudioHoover": boolean
    "isAudioClick": boolean
    "audioData": any
    "segments": number[]
    "createdAt": string
    "updatedAt": string
  }

interface Profile {
  currentProfile: string
  currentProfileNumber: string
  profileList: string []
  profileIndexList: number []
}

interface ActionBtn {
  btnname: string
  condition: string 
}

export interface MisSliceState {
  profile: Profile 
  activeStatus: string
  buttons: ActionBtn[]
  audio: boolean
  items: any[] | undefined
  misStatus: "idle" | "loading" | "failed"
}

// const current=new Date()
// current.setHours(current.getHours() +3);

 const ls: Record<string, any> | null = localStorage.getItem('luah-mis') ? JSON.parse(localStorage.getItem('luah-mis') as string) : null;
 //console. log(ls)

const initialState: MisSliceState = {
  profile: {
    currentProfile: ls?.currentProfile?ls?.currentProfile:"שלום",
    currentProfileNumber: ls?.currentProfileNumber?ls?.currentProfileNumber:"1",
    profileList:  ls?.profileList?ls?.profileList:["שלום"],
    profileIndexList: ls?.profileIndexList?ls.profileIndexList:[1]
  }, 
  activeStatus: "",
  buttons: [{btnname: "focus", condition: ""},{btnname: "play", condition: ""}],
  audio: false,
  items: undefined,
  misStatus: "idle",
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const misSlice = createAppSlice({
  name: "Mis",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: create => ({
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    setCurrentProfile: create.reducer(
      (state, action: PayloadAction<Profile>) => {
        state.profile = action.payload
        localStorage.setItem('luah-mis',JSON.stringify(state.profile))
      },
    ),
    setCurrentProfileNum: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.profile.currentProfileNumber = action.payload
        localStorage.setItem('luah-mis',JSON.stringify(state.profile))
      },
    ),
    setCurrentProfileName: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.profile.currentProfile = action.payload
        localStorage.setItem('luah-mis',JSON.stringify(state.profile))
      },
    ),
    setActiveStatus: create.reducer(
      (state, action: PayloadAction<string>) => {
        state.activeStatus = action.payload
      },
    ),
    setButtons: create.reducer(
      (state, action: PayloadAction<ActionBtn>) => {
        state.buttons = [...state.buttons, action.payload]
      },
    ),
    setButton: create.reducer(
      (state, action: PayloadAction<ActionBtn>) => { 
        const pos = state.buttons.map(e => e.btnname).indexOf(action.payload.btnname)!==-1?
                    state.buttons.map(e => e.btnname).indexOf(action.payload.btnname):state.buttons.length;
        const focus = state.buttons.map(e => e.btnname).indexOf("focus")
        const play = state.buttons.map(e => e.btnname).indexOf("play")
        state.buttons[focus].condition=action.payload.btnname
        state.buttons[pos]=action.payload
        if(action.payload.condition==="play") state.buttons[play].condition=action.payload.btnname
      },
    ),
    setAudio: create.reducer(
      (state, action: PayloadAction<boolean>) => {
        state.audio=action.payload
      },
    ),
    setItems: create.reducer(
      (state, action: PayloadAction<Item[]>) => {
        state.items=action.payload
      },
    ),
    setItemsAsync: create.asyncThunk(
      async (nextQuestionId: string) => {
        const response = await client.models.Question.get(
          { questionId: nextQuestionId },
          { selectionSet: ["questionId", "items.*"] },
        ).catch((error: any)=>console.log('GET call failed: ',error))
        return response?.data?.items
      },
      {
        pending: state => {
          state.misStatus = "loading"
        },
        fulfilled: (state, action) => {
          state.misStatus = "idle"
          state.items=action.payload
        },
        rejected: state => {
          state.misStatus = "failed"
        },
      },
    ),
  }),

  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectProfile: mis => mis.profile,
    selectActiveStatus: mis => mis.activeStatus,
    selectCurrentUserProfileNumber: mis => mis.profile.currentProfileNumber,
    selectButtons: mis => mis.buttons,
    selectAudio: mis => mis.audio,
    selectItems: mis => mis.items
  },
})

// Action creators are generated for each case reducer function.
export const { setCurrentProfile, setActiveStatus, setCurrentProfileNum, setCurrentProfileName, setAudio, setButton, 
        setButtons , setItems, setItemsAsync} = misSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectProfile, selectActiveStatus, selectCurrentUserProfileNumber, selectButtons, 
        selectAudio , selectItems} = misSlice.selectors

