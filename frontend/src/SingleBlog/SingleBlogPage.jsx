import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../Slices/singleBlogSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, postComment } from "../Slices/commentSlice";
import {Form, Button} from 'react-bootstrap'

export const SingleBlog = () => {
    const id = useParams()
    const dispatch = useDispatch()

    const [post, setPost] = useState()

    const blog = useSelector((state) => state.singleBlog)
    const comments = useSelector((state) => state.comments)
    const me = useSelector((state) => state.me.me)

    useEffect(() => {
        dispatch(fetchBlog(id))
        dispatch(fetchComments(blog.id))
    }, [dispatch, id, blog.id])

    const formHandler = async(e) => {
        e.preventDefault()
        dispatch(postComment({comment: post, blogid: blog.id, userid: me.id}))
        setPost('')
    }

    const dateConverter = (date) => {
        const newDate = new Date(date)
        const month = newDate.getMonth()
        const day = newDate.getDate()
        const year = newDate.getFullYear()
        return `${month}/${day}/${year} `
    }

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
            <div>
                <Form onSubmit={formHandler}> 
                    <Form.Label>Comment:</Form.Label>
                    <Form.Control type = 'text' as = 'textarea' value = {post} onChange={(e) => setPost(e.target.value)}/>
                    <Button variant = 'primary' type = 'submit'>Submit</Button>
                </Form>
            </div>
            <div>
                {comments && comments.length ? comments.map((comment) => (
                    <div>
                        <small>{comment.user.username}</small>&nbsp;<small>{dateConverter(comment.createdAt)}</small>
                        <p>{comment.comment}</p>
                    </div>
                )): (
                    <div>
                        <p>No comments</p>
                    </div>
                )}
            </div>
        </div>
    )
}