import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface IUser {
  id: number | null;
  name: string | null;
  phone: string | null;
  smscode: string | null;
  state: number | null;
  weight: string | null;
  address: string | null;
  age: string | null;
  blood: string | null;
  city: string | null;
  date: string | null;
  description: string | null;
  email: string | null;
  height: string | null;
  image: string | null;
  codemelli: string | null;
}
interface IProfile {
  user: IUser;
}

// Define the initial state using that type
const initialState: IProfile = {
  user: {
    id: null,
    name: null,
    phone: null,
    smscode: null,
    state: null,
    weight: null,
    address: null,
    age: null,
    blood: null,
    city: null,
    date: null,
    description: null,
    email: null,
    height: null,
    image: null,
    codemelli: null,
  },
};

export const ProfileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    // setProfile: (state, action: PayloadAction<IUser>) => {
    setProfile: (state, action: any) => {
      state.user = action.payload;
    },
    setProfileImage: (state, action: PayloadAction<string>) => {
      state.user.image = action.payload;
    },
  },
});

export const { setProfile, setProfileImage } = ProfileSlice.actions;

export const ProfileData = (state: RootState) => state.profile;

export default ProfileSlice.reducer;
