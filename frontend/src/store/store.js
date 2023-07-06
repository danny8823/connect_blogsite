import {configureStore} from '@reduxjs/toolkit'
import blogSlice from '../Blogs/blogSlice'
import authSlice from '../Login/authSlice'

const store = configureStore({
    reducer: {
        blogs: blogSlice,
        me: authSlice
    }
})

export default store