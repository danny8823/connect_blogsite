import {configureStore} from '@reduxjs/toolkit'
import blogSlice from '../Slices/blogSlice'
import authSlice from '../Slices/authSlice'
import singleBlogSlice from '../Slices/singleBlogSlice'
import UserBlogs from '../Slices/profileSlice'
import favsSlice from '../Slices/favsSlice'
import commentSlice from '../Slices/commentSlice'

const store = configureStore({
    reducer: {
        blogs: blogSlice,
        singleBlog: singleBlogSlice,
        me: authSlice,
        userBlogs: UserBlogs,
        favs: favsSlice,
        comments: commentSlice
    }
})

export default store