import React, { useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import { Blogs } from './Blogs/Blogs'
import { Post } from './Post/Post'
import { Login } from './Login/Login'
import { SingleBlog } from './SingleBlog/SingleBlogPage'
import { Profile } from './Profile/Profile'
import { useDispatch } from 'react-redux'
import { me } from './Slices/authSlice'
import { EditBlog } from './EditBlog/Edit'

export const AppRoutes = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(me())
    },[dispatch])
    
    return (
        <div>
            <Routes>
                <Route path = '/' element={<Blogs/>}/>
                <Route path = '/:id' element = {<SingleBlog/>}/>
                <Route path = '/post' element={<Post/>}/>
                <Route path = '/login' element={<Login/>}/>
                <Route path = '/profile' element = {<Profile/>}/>
                <Route path = '/edit/:id' element = {<EditBlog/>}/>
            </Routes>
        </div>
    )
}