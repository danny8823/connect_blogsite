import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Home } from './Home/Home'

export const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path = '/' element={<Home/>}/>
            </Routes>
        </div>
    )
}