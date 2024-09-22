import { type PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../store/createAppSlice"

interface Profile {
  currentProfile: string
  currentProfileNumber: string
  profileList: string []
}

export interface MisSliceState {
  profile: Profile 
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
  }, 
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
  }),

  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectProfile: mis => mis.profile,
  },
})

// Action creators are generated for each case reducer function.
export const { setCurrentProfile} =
  misSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectProfile  } = misSlice.selectors

