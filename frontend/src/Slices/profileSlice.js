import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUserBlogs = createAsyncThunk('get/userblog', async(id) => {
    try {
        if(id === null || id === undefined) {
            return;
        }
        const {data} = await axios.get(`https://connect-blog-server.onrender.com/api/blogs/users/${id}/`)
        return data
    } catch(error) {
        throw new Error(error)
    }
})

export const deleteBlog = createAsyncThunk('delete/userblog', async(id) => {
    try {
        const {data} = await axios.delete(`https://connect-blog-server.onrender.com/api/blogs/${id}/`)
        return data
    } catch(error) {
        throw new Error(error)
    }
})


const UserBlogs = createSlice({
    name: 'userblogs',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserBlogs.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(deleteBlog.fulfilled, (state,action) => {
            const deleted = state.filter((blog) => blog.id !== action.payload.id)
            return deleted
        })
    }
})

export default UserBlogs.reducer