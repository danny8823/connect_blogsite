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

export const postBlog = createAsyncThunk('post/blog', async({title, content}) => {
    try {
        const {data} = axios.post('/api/blogs', {title,content})
        return data
    } catch(error) {
        console.error(error)
    }
})

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        blog: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.fulfilled, (state,action) => {
            state.blog = action.payload
        })
        builder.addCase(postBlog.fulfilled, (state,action) => {
            state.blog.push(action.payload)
        })
    }
})


export default blogsSlice.reducer