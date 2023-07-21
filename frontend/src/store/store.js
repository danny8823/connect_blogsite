import {configureStore} from '@reduxjs/toolkit'
import blogSlice from '../Blogs/blogSlice'
import authSlice from '../Login/authSlice'
import singleBlogSlice from '../SingleBlog/singleBlogSlice'
import UserBlogs from '../Profile/profileSlice'
import favsSlice from '../Sidebar/favsSlice'

const store = configureStore({
    reducer: {
        blogs: blogSlice,
        singleBlog: singleBlogSlice,
        me: authSlice,
        userBlogs: UserBlogs,
        favs: favsSlice
    }
})

export default store