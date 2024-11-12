import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./api";

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: "",
};

//create thunk functions
export const fetchPosts = createAsyncThunk("posts/getPosts", async () => {
    const posts = await getPosts();
    return posts;
});

const postSlice = createSlice({
    name: "posts",
    initialState: initialState,
    //only for sychronous actions
    reducers: {},
    //only for asynchronous actions
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            });
    },
});

const postReducer = postSlice.reducer;
export default postReducer;
