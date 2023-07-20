import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export const UpdateUser = ({username, useremail, image}) => {
    const [userName, setUserName] = useState(username)
    const [email, setEmail] = useState(useremail)
    const [profileImage, setProfileImage] = useState(image)

    const formHandler = (e) => {
        e.preventDefault()
    }
    const me = useSelector((state) => state.me.me)
    console.log('==>',me)
    return (
        <div>
            <Form onSubmit={formHandler}>
                <Form.Group className= 'mb-3'>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type = 'text' placeholder = {username} onChange={(e) => setUserName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className= 'mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type = 'text' placeholder = {useremail} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className= 'mb-3'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type = 'text' placeholder = 'change profile iamge' onChange={(e) => setProfileImage(e.target.value)}></Form.Control>
                </Form.Group>
                <Button variant = 'primary' type = 'submit'>Update</Button>
            </Form>
        </div>
    )
}