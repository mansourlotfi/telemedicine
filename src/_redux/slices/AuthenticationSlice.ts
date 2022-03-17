import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface IAuthentication {
  isSignedIn: boolean;
  authData: {
    username: string;
    accessToken: string;
    accessTokenExpireIn: string;
    refreshToken: string;
    refreshTokenExpireIn: string;
    ClientKey: string;
  };
}

// Define the initial state using that type
const initialState: IAuthentication = {
  isSignedIn: true,
  authData: {
    username: "",
    accessToken: "",
    accessTokenExpireIn: "",
    refreshToken: "",
    refreshTokenExpireIn: "",
    ClientKey: "",
  },
};

export const AuthenticationSlice = createSlice({
  name: "Authentication",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<any>) => {
      state.isSignedIn = true;
      state.authData = action.payload;
    },
    signOut: (state) => {
      state.isSignedIn = false;
    },
  },
});

export const { signIn, signOut } = AuthenticationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const authData = (state: RootState) => state.Authentication;

export default AuthenticationSlice.reducer;
