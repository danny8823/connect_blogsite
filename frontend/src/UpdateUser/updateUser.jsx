import React, { useEffect, useState} from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify"
import axios from "axios"
import {useNavigate} from 'react-router-dom'

export const UpdateUser = ({username, useremail, image}) => {

    const {me} = useSelector((state) => state.me)
    const [userName, setUserName] = useState(username)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState(useremail)
    const [profileImage, setProfileImage] = useState(image)
    const navigate = useNavigate()
    
    const formHandler = async (e) => {
        e.preventDefault()
        try {
            if(password === confirmPassword) {
                await axios.put(`/api/users/${me.id}`, {username:userName,email: email,image: profileImage, password})
                toast.success('Successfully updated!')
                navigate('/')
            } else {
                toast.error('Passwords must match!', {
                    position: 'bottom-right'
                })
            }
        } catch(error) {
            toast.error('Something went wrong!', {
                position: 'bottom-right'
            })
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
                    <Form.Control type = 'password' placeholder = 'change password' onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className= 'mb-3'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type = 'password' placeholder = 'confirm password' onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
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