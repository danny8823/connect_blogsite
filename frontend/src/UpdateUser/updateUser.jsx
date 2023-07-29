import React, { useState} from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios"

export const UpdateUser = ({username, useremail, image}) => {

    const {me} = useSelector((state) => state.me)
    const [userName, setUserName] = useState(username)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState(useremail)
    const [profileImage, setProfileImage] = useState(image)
    
    const formHandler = async (e) => {
        e.preventDefault()
        try {
            if(password === confirmPassword) {
                await axios.put(`/api/users/${me.id}`, {username:userName,email: email,profileImage, password})
            } else {
                window.alert('something went wrong')
            }
            
        } catch(error) {
            throw new Error(error)
        }
    }
    
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
                    <Form.Label>Password</Form.Label>
                    <Form.Control type = 'text' placeholder = 'change password' onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className= 'mb-3'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type = 'text' placeholder = 'confirm password' onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className= 'mb-3'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control type = 'text' placeholder = 'image link' onChange={(e) => setProfileImage(e.target.value)}></Form.Control>
                </Form.Group>
                <Button className = 'mt-2' variant = 'primary' type = 'submit'>Update</Button>
            </Form>
        </div>
    )
}