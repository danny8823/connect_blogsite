import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { editBlog, fetchBlog } from "../Slices/singleBlogSlice";
import { Form } from "react-bootstrap";
import {Button} from 'react-bootstrap'
import { useSelector } from "react-redux";
export const EditBlog = () => {
    const {id} = useParams()
    const dispatch = useDispatch()

    const blog = useSelector((state) => state.singleBlog)

    const [newTitle, setNewTitle] = useState(null)
    const [newContent, setNewContent] = useState(null)

    const formHandler = (e) => {
        e.preventDefault()
        dispatch(editBlog({blogid:id, title:newTitle, content:newContent}))
        newTitle('')
        newContent('')
    }

    useEffect(() => {
        dispatch(fetchBlog(id))
    },[dispatch, id])

    

    return (
        <div className = 'w-8/12 m-auto'>
            <h1 className = 'text-center'>Edit your blog.</h1>
            {blog ? <div>
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
            </div> : null}
            <Form onSubmit={formHandler}>
                <Form.Group className= 'mb-3'>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type = 'text' placeholder = 'change title' onChange={(e) => setNewTitle(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className= 'mb-3'>
                    <Form.Label>Content</Form.Label>
                    <Form.Control as='textarea' type = 'text' placeholder = 'change title' onChange={(e) => setNewContent(e.target.value)}></Form.Control>
                </Form.Group>
                <Button variant = 'primary' type = 'submit'>Update</Button>
            </Form>
        </div>
    )
}