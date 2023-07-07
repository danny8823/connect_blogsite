import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBlogs = createAsyncThunk('get/blogs', async() => {
    try {
        const {data} = await axios.get('/api/blogs')
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
})

export const postBlog = createAsyncThunk('post/blog', async({title, content, userid}) => {
    try {
        const {data} = await axios.post('/api/blogs', {title , content, userid})
        return data
    } catch(error) {
        console.error(error)
    }
})

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBlogs.fulfilled, (state,action) => {
            return action.payload
        })
        builder.addCase(postBlog.fulfilled, (state,action) => {
            state.push(action.payload)
        })
    }
})


export default blogsSlice.reducer