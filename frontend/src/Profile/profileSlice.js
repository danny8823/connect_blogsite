import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUserBlogs = createAsyncThunk('get/userblog', async(id) => {
    try {
        const {data} = await axios.get(`/api/blogs/user/${id}`)
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
    }
})

export default UserBlogs.reducer