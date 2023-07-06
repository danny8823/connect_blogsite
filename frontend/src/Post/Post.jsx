import React from "react";
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'
export const Post = () => {
    return (
        <div>
            <Form className = 'w-96 m-auto'>
                <Form.Group>
                    <Form.Label>Title:</Form.Label>
                    <Form.Control placeholder='Title' type='text'/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content:</Form.Label>
                    <Form.Control size = 'lg' as="textarea" placeholder='Content' type='text'/>
                </Form.Group>
                <Button variant = 'primary' className="mt-2">Post!</Button>
            </Form>
        </div>
    )
}