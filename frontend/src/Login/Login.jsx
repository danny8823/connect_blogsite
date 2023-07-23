import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";
import {useDispatch} from 'react-redux'
import { authenticate } from "../Slices/authSlice";

export const Login = ({handleClose}) => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email === '' || password === '') {
            setEmail('')
            setPassword('')
            return console.log('please do not leave fields empty')
        } else {
            const method = 'login'
            dispatch(authenticate({email, password, method: method}))
            setEmail('')
            setPassword('')
        }     
        
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control type = 'email' value={email} placeholder= 'Enter email' onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password:</Form.Label>
                <Form.Control type = 'password' value={password} placeholder= 'Enter password' onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type ='submit' onClick={handleClose}>Login</Button>
        </Form>
    )
} 