import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { postBlog } from "../Blogs/blogSlice";

export const Post = () => {
    const [title, setTitle] = useState(null)
    const [content, setContent] = useState(null)

    const dispatch = useDispatch()

    const formHandler = (e) => {
        e.preventDefault()
        if(title === null || title === undefined || content === null || content === undefined) {
            console.log('fields cannont be empty')
        } else {
        dispatch(postBlog({title, content}))
        setTitle('')
        setContent('')
        }
    }

    return (
        <div>
            <Form onSubmit= {formHandler}className = 'w-96 m-auto'>
                <Form.Group>
                    <Form.Label>Title:</Form.Label>
                    <Form.Control placeholder='Title' type='text' onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content:</Form.Label>
                    <Form.Control size = 'lg' as="textarea" placeholder='Content' type='text' onChange={(e) => setContent(e.target.value)}/>
                </Form.Group>
                <Button type = "submit" variant = 'primary' className="mt-2">Post!</Button>
            </Form>
        </div>
    )
}