import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { fetchBlogs } from "./blogSlice";
import {Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import { SideBar } from "../Sidebar/SideBar";

export const Blogs = () => {
    const dispatch = useDispatch()
    const loggedIn = useSelector((state) => !!state.me.me.id)
    useEffect(() => {
        dispatch(fetchBlogs())
    },[dispatch])
    

    const blogs = useSelector((state) => state.blogs)
    const me = useSelector((state) => state.me.me)
    if (blogs[0] === undefined) return (
        <div className = 'flex m-auto'>
            <Spinner animation="border" role="status"/>
        </div>
        )
    
    return (
        <div className = 'flex w-screen'>
            <div className ='h-auto w-8/12 m-auto'>
                {blogs && blogs.length ? (
                    blogs.map((blog) => (
                        <div key = {blog.id} className = 'w-96 pt-10 border-b-2 m-auto'>
                            {blog.user && blog.user.username && <p>Written by: {blog.user.username}</p>}
                            <Link className = 'no-underline text-black no-underline' to = {`/${blog.id}`}><h2 className = 'text-center'>{blog.title}</h2></Link>
                            <p>{blog.content}</p>
                        </div>
                    ))
                ): (
                    <p>No blogs to show!</p>
                )}
                
            </div>
            <SideBar/>
        </div>
    )
}