import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface IUser {
  id: number | null;
  name: string | null;
  phone: string;
  smscode: string | null;
  state: string | null;
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
    phone: "09354273664",
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
    setProfile: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      // state.user.id = action.payload.id;
      // state.user.name = action.payload.name;
      // state.user.phone = action.payload.phone;
      // state.user.smscode = action.payload.smscode;
      // state.user.state = action.payload.state;
      // state.user.weight = action.payload.weight;
      // state.user.address = action.payload.address;
      // state.user.age = action.payload.age;
      // state.user.blood = action.payload.blood;
      // state.user.city = action.payload.city;
      // state.user.date = action.payload.date;
      // state.user.description = action.payload.description;
      // state.user.email = action.payload.email;
      // state.user.height = action.payload.height;
      // state.user.image = action.payload.image;
    },
    setProfileImage: (state, action: PayloadAction<string>) => {
      state.user.image = action.payload;
    },
  },
});

export const { setProfile, setProfileImage } = ProfileSlice.actions;

export const ProfileData = (state: RootState) => state.profile;

export default ProfileSlice.reducer;
