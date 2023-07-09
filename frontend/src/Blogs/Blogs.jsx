import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { fetchBlogs } from "./blogSlice";
import {Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'

export const Blogs = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBlogs())
    },[dispatch])
    

    const blogs = useSelector((state) => state.blogs)

    if (blogs[0] === undefined) return (
        <div className = 'flex m-auto'>
            <Spinner animation="border" role="status"/>
        </div>
        )
    
    return (
        <div className ='bg-black h-auto w-7/12 m-auto'>
            {blogs && blogs.length ? (
                blogs.map((blog) => (
                    <div key = {blog.id} className = 'w-96 text-center border-b-2 text-white m-auto'>
                        {blog.user && blog.user.username && <p>{blog.user.username}</p>}
                        <Link className = 'no-underline text-white' to = {`/${blog.id}`}><h2>{blog.title}</h2></Link>
                        <p>{blog.content}</p>
                    </div>
                ))
            ): (
                <p>No blogs to show!</p>
            )}
        </div>
    )
}