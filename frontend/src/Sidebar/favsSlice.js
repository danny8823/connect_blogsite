import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFavs = createAsyncThunk('fetch/favs', async() => {
    try {
        const {data} = await axios.get(`api/favs`)
        return data
    } catch(error) {
        throw new Error(error)
    }
})

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFavs.fulfilled, (state,action) => {
            return action.payload
        })
    }
})

export default favoritesSlice.reducer