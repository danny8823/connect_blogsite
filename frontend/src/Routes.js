import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Blogs } from './Blogs/Blogs'
import { Post } from './Post/Post'
import { Login } from './Login/Login'

export const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path = '/blogs' element={<Blogs/>}/>
                <Route path = '/post' element={<Post/>}/>
                <Route path = '/login' element={<Login/>}/>
            </Routes>
        </div>
    )
}