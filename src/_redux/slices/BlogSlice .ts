import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export interface IBlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
  type: string;
  description: string;
}
interface IBlogPosts {
  posts: IBlogPost[] | [];
}

// Define the initial state using that type
const initialState: IBlogPosts = {
  posts: [],
};

export const BlogPostsSlice = createSlice({
  name: "BlogPost",
  initialState,
  reducers: {
    setBlosPosts: (state, action: PayloadAction<IBlogPost[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setBlosPosts } = BlogPostsSlice.actions;

export const BlogPostsData = (state: RootState) => state.BlogPosts;

export default BlogPostsSlice.reducer;
