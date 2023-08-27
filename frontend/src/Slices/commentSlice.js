import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

export const fetchComments = createAsyncThunk('get/comments', async(id) => {
    try {
        const {data} = await axios.get(`https://connect-blog-server.onrender.com/api/comments`,{params: {value: id}})
        return data
    } catch (error) {
        throw new Error(error)
    }
})

export const postComment = createAsyncThunk('post/comment', async({comment,blogid,userid, username}) => {
    try {
        const { data } = await axios.post(`https://connect-blog-server.onrender.com/api/comments`, {comment, blogid, userid, username})
        
        return data
    } catch(error) {
        throw new Error(error)
    }
})

export const delComment = createAsyncThunk('del/comment', async(id) => {
    try {
        const {data} = await axios.delete(`https://connect-blog-server.onrender.com/api/comments/${id}`)
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
            toast.success("Comment posted!", {
                position: "bottom-right"
            })
        })
        builder.addCase(delComment.fulfilled, (state, action) => {
            const deleted = state.filter((comment) => comment.id !== action.payload.id)
            return deleted
        })
    }
})

export default commentSlice.reducer