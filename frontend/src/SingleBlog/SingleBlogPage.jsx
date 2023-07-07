import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBlog } from "./singleBlogSlice";
import { useDispatch, useSelector } from "react-redux";

export const SingleBlog = () => {
    const id = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchBlog(id))
    }, [dispatch, id])

    const blog = useSelector((state) => state.singleBlog)
    if(blog === undefined) return <h1>Blog loading...</h1>

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            {blog.user && blog.user.username && <small>{blog.user.username}</small>}
        </div>
    )
}