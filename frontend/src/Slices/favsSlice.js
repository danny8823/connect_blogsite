import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFavs = createAsyncThunk('fetch/favs', async(id) => {
    try {
        const {data} = await axios.get(`https://connect-blog-server.onrender.com/api/favs`, {params: {value: id}})
        return data
    } catch(error) {
        throw new Error(error)
    }
})

export const addFavs = createAsyncThunk('add/favs', async({title, content, userId, blogId}) => {
    try {
            const {data} = await axios.post(`https://connect-blog-server.onrender.com/api/favs`, {title, content, userId, blogId})
            return data
    } catch(error) {
        throw new Error(error)
    }
})

export const delFav = createAsyncThunk('delete/fav', async(id) => {
    try {
        const {data} = await axios.delete(`https://connect-blog-server.onrender.com/api/favs/${id}`)
        return data
    } catch(error) {
        throw new Error(error)
    }
})

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favs: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFavs.fulfilled, (state,action) => {
            state.favs = action.payload
        })
        builder.addCase(addFavs.fulfilled, (state,action) => {
            console.log(action.payload.userId)
            if(action.payload.userId) {
                state.favs.push(action.payload)
            } else {
                return window.alert('Must have an account to favorite')
            }
        })
        builder.addCase(delFav.fulfilled, (state,action) => {
            const deleted = state.favs.filter((blog) => blog.id !== action.payload.id)
            state.favs = deleted
        })
    }
})

export default favoritesSlice.reducer