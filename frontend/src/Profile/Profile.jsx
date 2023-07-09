import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { deleteBlog, fetchUserBlogs } from "./profileSlice";
import {Button,Card} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import dummy from '../Logo/dummy-photo.jpg'
export const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const me = useSelector((state) => state.me.me)
    
    const blogs = useSelector((state) => state.userBlogs)
    
    const clickHandler = (id) => {
         dispatch(deleteBlog(id))
    }

    const editHandler = (blogid) => {
        navigate('/edit')
    }
    
    useEffect(() => {
            dispatch(fetchUserBlogs(me.id))
        },[dispatch, me.id])

    return (
        <div>
            <div>
                <Card style = {{width: '18rem'}}>
                    <Card.Img variant="top" src={dummy}/>
                    <Card.Body>
                        <Card.Title>{me.username}</Card.Title>
                        <Card.Text>{me.email}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                {blogs && blogs.length ? (
                    blogs.map((blog) => (
                        <div key = {blog.id}>
                            <h1>{blog.title}</h1>
                            <p>{blog.content}</p>
                            <Button variant = 'primary' onClick={() =>clickHandler(blog.id)}>Delete post!</Button>
                            <Button variant = 'secondary' onClick = {() => editHandler(blog.id)}>Edit post</Button>
                        </div>
                    ))
                ): (
                    <p>You have no blogs!</p>
                )}
            </div>
        </div>
    )
}