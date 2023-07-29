import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../Slices/singleBlogSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, postComment } from "../Slices/commentSlice";
import {Form, Button} from 'react-bootstrap'
import { Comments } from "./Comments";

export const SingleBlog = () => {
    const id = useParams()
    const dispatch = useDispatch()

    const blog = useSelector((state) => state.singleBlog)
    // const comments = useSelector((state) => state.comments)
    const me = useSelector((state) => state.me.me)

    useEffect(() => {
        dispatch(fetchBlog(id))
    }, [dispatch, id, blog.id])

    if(blog.id === undefined) return (
        <div className = 'w-screen m-auto'>
           <h1>Blog loading...</h1> 
        </div>
    )

    return (
        <div className = 'w-3/5 m-auto p-10'>
            <div className = 'border-b-2'>
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
                {blog.user && blog.user.username && <small>Author: {blog.user.username}</small>}
            </div>
            <Comments me = {me} blog = {blog}/>
        </div>
    )
}