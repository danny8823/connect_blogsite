import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { fetchBlogs } from "../Slices/blogSlice";
import {Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import { SideBar } from "../Sidebar/SideBar";
import heartIcon from '../Logo/heart.png'
import saveIcon from '../Logo/save.png'
import { addFavs } from "../Slices/favsSlice";

export const Blogs = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBlogs())
    },[dispatch])

    const me = useSelector((state) => state.me.me)
    const blogs = useSelector((state) => state.blogs)

    if (blogs[0] === undefined) return (
        <div className = 'flex m-auto'>
            <Spinner animation="border" role="status"/>
        </div>
        )
    
    const favoriteHandler = async (title, content, userId, blogId) => {
       dispatch(addFavs({title,content,userId, blogId}))
    }

    return (
        <div className = 'flex w-screen'>
            <div className ='h-auto w-8/12 m-auto'>
                {blogs && blogs.length ? (
                    blogs.map((blog) => (
                        <div key = {blog.id} className = 'w-96 pt-10 border-b-2 m-auto'>
                            {blog.user && <p>Written by: {blog.user.username}</p>}
                            <Link className = 'no-underline text-black no-underline' to = {`/${blog.id}`}><h2 className = 'text-center'>{blog.title}</h2></Link>
                            <p>{blog.content}</p>
                            <div className = 'flex w-96 justify-end'>
                                <img  onClick={() => favoriteHandler(blog.title, blog.content, me.id, blog.id)} className = 'w-10 h-10' src = {heartIcon} alt = 'Freepik heart icon'/>
                                <img  className = 'w-10 h-10' src = {saveIcon} alt = 'Freepik save icon'/>
                            </div>
                        </div>
                    ))
                ): (
                    <p>No blogs to show!</p>
                )}
                
            </div>
            <SideBar/>
        </div>
    )
}