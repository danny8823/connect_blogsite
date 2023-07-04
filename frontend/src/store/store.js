import {configureStore} from '@reduxjs/toolkit'
import blogSlice from '../Blogs/blogSlice'

const store = configureStore({
    reducer: {
        blogs: blogSlice
    }
})

export default store