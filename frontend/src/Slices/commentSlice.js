import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchComments = createAsyncThunk('get/comments', async(id) => {
    try {
        const {data} = await axios.get(`/api/comments`,{params: {value: id}})
        return data
    } catch (error) {
        throw new Error(error)
    }
})

export const postComment = createAsyncThunk('post/comment', async({comment,blogid,userid}) => {
    try {
        console.log(blogid, userid)
        const { data } = await axios.post(`/api/comments`, {comment, blogid, userid})
        
        return data
    } catch(error) {
        throw new Error(error)
    }
})

const commentSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.fulfilled, (state,action) => {
            return action.payload
        })
        builder.addCase(postComment.fulfilled, (state,action) => {
            state.push(action.payload)
        })
    }
})

export default commentSlice.reducer