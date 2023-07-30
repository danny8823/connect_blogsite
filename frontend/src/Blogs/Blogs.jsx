import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { fetchBlogs } from "../Slices/blogSlice";
import {Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import { SideBar } from "../Sidebar/SideBar";
import heartIcon from '../Logo/heart.png'
import heartFilled from '../Logo/redheart.png'
import { addFavs, delFav} from "../Slices/favsSlice";
import Card from '@mui/material/Card'
import { CardActions, CardContent, Typography } from "@mui/material";

export const Blogs = () => {
    const dispatch = useDispatch()
    const me = useSelector((state) => state.me.me)
    const blogs = useSelector((state) => state.blogs)
    const {favs} = useSelector((state) => state.favs)
    useEffect(() => {
        dispatch(fetchBlogs())
    },[dispatch])

    if (blogs[0] === undefined) return (
        <div className = 'flex m-auto'>
            <Spinner animation="border" role="status"/>
        </div>
    )
    
    const favoriteHandler = async (title, content, userId, blogId) => {
        if( userId === undefined) {
            return window.alert('Need to log in to favorite')
        } else {
            dispatch(addFavs({title,content,userId, blogId}))
        }
        
    }

    const deleteFavHandler = async(id) => {
        if(favs.length) {
            for( let i = 0; i < favs.length; i++) {
                if(favs[i].blogId === id) {
                    dispatch(delFav(favs[i].id))
                }
            }
        }
        return new Error()
    }

    const isBlogFav = (title) => favs.some((item) => item.title === title)

    return (
        <div className = 'flex w-screen'>
            <div className ='flex flex-col items-center w-fit'>
                {blogs && blogs.length ? (
                    blogs.map((blog) => (
                        <Card variant = 'outlined' key = {blog.id} className = 'w-3/5  pt-10 border-b-2 m-2'>
                            <CardContent>
                            <Typography gutterBottom variant = 'h5' component="div">
                                <Link className = 'no-underline text-black no-underline' to = {`/${blog.id}`}><h2 className = 'text-center'>{blog.title}</h2></Link>
                            </Typography>
                            <Typography variant = 'body1' color = 'text.primary'>
                                {blog.content.slice(0,200)} ........
                            </Typography>
                            {blog.user && <Typography variant = 'body2' color = 'text.secondary' className = 'pt-4'>Written by: {blog.user.username}</Typography>}
                            </CardContent>
                            <CardActions>
                                {isBlogFav(blog.title) ? 
                                    <img onClick = {() => deleteFavHandler(blog.id)} className = 'w-10 h-10' src = {heartFilled} alt = 'Freepik heart-filled icon'/> :
                                    <img  onClick={() => favoriteHandler(blog.title, blog.content, me.id, blog.id)} className = 'w-10 h-10' src = {heartIcon} alt = 'Freepik heart icon'/>
                                }
                            </CardActions>
                        </Card>
                    ))
                ): (
                    <p>No blogs to show!</p>
                )}
            </div>
            <SideBar/>
        </div>
    )
}