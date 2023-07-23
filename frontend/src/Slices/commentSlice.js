import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchComments = createAsyncThunk('get/comments', async() => {
    try {
        const {data} = await axios.get(`/api/comments`)
        return data
    } catch (error) {
        throw new Error(error)
    }
})

const commentSlice = createSlice({
    name: 'comments',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchComments.fulfilled, (state,action) => {
            return action.payload
        })
    }
})

export default commentSlice.reducer