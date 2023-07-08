import React, { useCallback } from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { deleteBlog, fetchUserBlogs } from "./profileSlice";
import {Button} from 'react-bootstrap'
export const Profile = () => {
    const dispatch = useDispatch()

    const me = useSelector((state) => state.me.me)
    
    const blogs = useSelector((state) => state.userBlogs)
    
    const clickHandler = (id) => {
         dispatch(deleteBlog(id))
    }
    useEffect(() => {
            dispatch(fetchUserBlogs(me.id))
        },[dispatch, me.id])

    return (
        <div>
            {blogs && blogs.length ? (
                blogs.map((blog) => (
                    <div key = {blog.id}>
                        <h1>{blog.title}</h1>
                        <p>{blog.content}</p>
                        <Button variant = 'primary' onClick={() =>clickHandler(blog.id)}>Delete post!</Button>
                    </div>
                ))
            ): (
                <p>You have no blogs!</p>
            )}
        </div>
    )
}