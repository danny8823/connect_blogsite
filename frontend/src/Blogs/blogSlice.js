import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBlogs = createAsyncThunk('get/blogs', async() => {
    try {
        const {data} = await axios.get('/api/blogs')
        return data
    } catch (error) {
        console.error(error)
    }
})

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.fulfilled, (state,action) => {
            console.log(action.payload)
            state.blogs = action.payload
        })
    }
})


export default blogsSlice.reducer