import {configureStore} from '@reduxjs/toolkit'
import blogSlice from '../Blogs/blogSlice'
import authSlice from '../Login/authSlice'
import singleBlogSlice from '../SingleBlog/singleBlogSlice'

const store = configureStore({
    reducer: {
        blogs: blogSlice,
        singleBlog: singleBlogSlice,
        me: authSlice
    }
})

export default store