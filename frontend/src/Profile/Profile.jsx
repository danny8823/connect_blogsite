import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { deleteBlog, fetchUserBlogs } from "../Slices/profileSlice";
import {Button,Card} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { UpdateUser } from "../UpdateUser/updateUser";

export const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const me = useSelector((state) => state.me.me)
    
    const blogs = useSelector((state) => state.userBlogs)
    
    const clickHandler = (id) => {
         dispatch(deleteBlog(id))
    }

    const editHandler = (blogid) => {
        navigate(`/edit/${blogid}`)
    }
    
    useEffect(() => {
            dispatch(fetchUserBlogs(me.id))
        },[dispatch, me.id])

    return (
        <div>
            <div className = 'mt-10 mb-10'>
                <Card className = 'm-auto'style = {{width: '18rem'}}>
                    <Card.Img variant="top" src={me.image}/>
                    <Card.Body>
                        <Card.Title>{me.username}</Card.Title>
                        <Card.Text>{me.email}</Card.Text>
                    </Card.Body>
                </Card>
                <h2>Update profile</h2>
                <UpdateUser username={me.username} useremail={me.email} image={me.image}/>
            </div>
            <div className = 'w-96 m-auto'>
                {blogs && blogs.length ? (
                    blogs.map((blog) => (
                        <div key = {blog.id} className = 'border-b-2'>
                            <h1>{blog.title}</h1>
                            <p>{blog.content}</p>
                            <Button className = 'm-2' variant = 'primary' onClick={() =>clickHandler(blog.id)}>Delete post</Button>
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