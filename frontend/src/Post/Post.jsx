import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { postBlog } from "../Slices/blogSlice";

export const Post = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const user = useSelector((state) => state.me.me)
    
    const dispatch = useDispatch()

    const formHandler = async (e) => {
        e.preventDefault()
        if(title === '' || content === '') {
            console.log('fields cannot be empty')
        } else {
            dispatch(postBlog({title, content, userid: user.id}))
            setTitle('')
            setContent('')
        }
    }

    return (
        <div>
            <h1 className = 'text-center'>Draft your blog here.</h1>
            <Form onSubmit= {formHandler} className = 'w-8/12 m-auto'>
                <Form.Group>
                    <Form.Label>Title:</Form.Label>
                    <Form.Control placeholder='Title' type='text' value = {title} onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content:</Form.Label>
                    <Form.Control size = 'lg' as="textarea" placeholder='Content' value = {content} type='text' onChange={(e) => setContent(e.target.value)}/>
                </Form.Group>
                <Button type = "submit" variant = 'primary' className="mt-2">Post!</Button>
            </Form>
        </div>
    )
}