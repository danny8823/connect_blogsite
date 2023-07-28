import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlog = createAsyncThunk('fetch/blog', async (blogid) => {
    try {
        const {id} = blogid
        const {data} = await axios.get(`/api/blogs/${id}`)
        return data
    } catch(error) {
        throw new Error(error)
    }
})

export const editBlog = createAsyncThunk('edit/blog', async({blogid, title, content}) => {
    try {
        const id = blogid
        const {data} = await axios.put(`/api/blogs/${id}`, {
            id, title, content
        })
        return data
    } catch(error) {
        throw new Error(error)
    }
})

const singleBlogSlice = createSlice({
    name: 'single_blog',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBlog.fulfilled, (state,action) => {
            return action.payload
        })
        builder.addCase(editBlog.fulfilled, (state, action) => {
            state = action.payload
        })
    }
})

export default singleBlogSlice.reducer