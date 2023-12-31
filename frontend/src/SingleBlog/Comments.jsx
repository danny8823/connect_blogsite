import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { delComment, fetchComments, postComment } from "../Slices/commentSlice";
import { Form, Button } from "react-bootstrap";
import {toast} from "react-toastify"

export const Comments = ({ me, blog}) => {
    const [post, setPost] = useState()
    const comments = useSelector((state) => state.comments)
    const dispatch = useDispatch()

    const deleteHandler = async(id) => {
        dispatch(delComment(id))
    }

    useEffect(() => {
            dispatch(fetchComments(blog.id))
        },[dispatch, blog.id])

    const dateConverter = (date) => {
        const newDate = new Date(date)
        const month = newDate.getMonth()
        const day = newDate.getDate()
        const year = newDate.getFullYear()
        return `${month}/${day}/${year} `
    }

    const usersComment = (comment) => {
        return me.id === comment.userId
    }

    const formHandler = (e) => {
        e.preventDefault()
        if(me.username === undefined) {
            toast.error('You must be logged in to comment!', {
                position: "bottom-right"
            })
        } else if (post === undefined) {
            toast.error('You cannot post an empty comment!', {
                position: "bottom-right"
            })
        } else {
            dispatch(postComment({comment: post, blogid: blog.id, userid: me.id, username: me.username}))
            setPost('')
            toast.success('Comment posted!', {
                position: "bottom-right"
            })
        }
    }

   

    return (
        <>
            <div>
                <Form onSubmit={formHandler}> 
                    <Form.Label>Comment:</Form.Label>
                    <Form.Control className = 'mb-2'type = 'text' as = 'textarea' value = {post} onChange={(e) => setPost(e.target.value)}/>
                    <Button variant = 'primary' type = 'submit'>Submit</Button>
                </Form>
            </div>
            <div>
                {comments && comments.length ? comments.map((comment) => (
                    <div>
                        <small>{comment.username ? comment.username : 'Guest'}</small>&nbsp;<small>{dateConverter(comment.createdAt)}</small>
                        <p>{comment.comment}</p>
                        {usersComment(comment) && (
                            <div>
                                <Button onClick = {() => deleteHandler(comment.id)} className = 'ml-1'>Delete</Button>
                            </div>
                        )}
                    </div>
                )): (
                    <div>
                        <p>No comments</p>
                    </div>
                )}
            </div>
        </>
    )
}