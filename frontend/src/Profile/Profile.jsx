import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { fetchUserBlogs } from "./profileSlice";

export const Profile = () => {
    const dispatch = useDispatch()

    const me = useSelector((state) => state.me.me)
    useEffect(() => {
        dispatch(fetchUserBlogs(me.id))
    },[dispatch])

    const blogs = useSelector((state) => state.userBlogs)
    
    return (
        <div>
            {blogs && blogs.length ? (
                blogs.map((blog) => (
                    <div>
                        <h1>{blog.title}</h1>
                        <p>{blog.content}</p>
                    </div>
                ))
            ): (
                <p>You have no blogs!</p>
            )}
        </div>
    )
}