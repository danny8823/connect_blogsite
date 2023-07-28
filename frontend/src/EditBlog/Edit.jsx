import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editBlog, fetchBlog } from "../Slices/singleBlogSlice";
import { Form } from "react-bootstrap";
import {Button} from 'react-bootstrap'

export const EditBlog = () => {
    const {id} = useParams()
    console.log('==<id>' , id)
    const dispatch = useDispatch()

    const [newTitle, setNewTitle] = useState(null)
    const [newContent, setNewContent] = useState(null)

    const formHandler = async(e) => {
        e.preventDefault()
        console.log(newTitle, newContent)
        await dispatch(editBlog({blogid:id, title:newTitle, content:newContent}))
    }

    return (
        <div>
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