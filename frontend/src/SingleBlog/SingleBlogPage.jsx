import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBlog } from "../Slices/singleBlogSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../Slices/commentSlice";

export const SingleBlog = () => {
    const id = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchBlog(id))
        dispatch(fetchComments())
    }, [dispatch, id])

    const blog = useSelector((state) => state.singleBlog)
    const comments = useSelector((state) => state.comments)

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
                {comments && comments.length ? comments.map((comment) => (
                    <div>
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