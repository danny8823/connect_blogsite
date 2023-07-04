import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { fetchBlogs } from "./blogSlice";

export const Blogs = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchBlogs())
    },[dispatch])
    
    const blogs = useSelector((state) => state.blogs.blogs)

    return (
        <div>
            {blogs && blogs.length ? (
                blogs.map((blog) => (
                    <div key = {blog.id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                    </div>
                ))
            ): (
                <p>No blogs to show!</p>
            )}
        </div>
    )
}