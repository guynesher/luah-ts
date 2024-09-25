import { type PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../store/createAppSlice"

interface Profile {
  currentProfile: string
  currentProfileNumber: string
  profileList: string []
  profileIndexList: number []
}

export interface MisSliceState {
  profile: Profile 
  activeStatus: string
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
  }),

  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectProfile: mis => mis.profile,
    selectActiveStatus: mis => mis.activeStatus,
    selectCurrentUserProfileNumber: mis => mis.profile.currentProfileNumber
  },
})

// Action creators are generated for each case reducer function.
export const { setCurrentProfile, setActiveStatus, setCurrentProfileNum, setCurrentProfileName} =
  misSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectProfile, selectActiveStatus, selectCurrentUserProfileNumber } = misSlice.selectors

