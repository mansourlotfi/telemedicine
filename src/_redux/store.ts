import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "./slices/AuthenticationSlice";
import ProfileReducer from "./slices/ProfileSlice";

export const store = configureStore({
  reducer: {
    Authentication: AuthenticationReducer,
    profile: ProfileReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
