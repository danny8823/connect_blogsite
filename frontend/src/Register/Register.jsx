import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch } from "react-redux";
import { authenticate } from "../Slices/authSlice";

export const Register = ({handleClose2}) => {
     const dispatch = useDispatch()

     const [email, setEmail] = useState('')
     const [username, setUserName] = useState('')
     const [password, setPassword] = useState('')
     const [confirmPassword, setConfirmPassword] = useState('')

     const method = 'signup'

     const handleSubmit = (e) => {
          e.preventDefault()
          if(email === '' || password === '' || email === '') {
               console.log('can not be empty')
               setEmail('')
               setUserName('')
               setPassword('')
               setConfirmPassword('')
          } else if (password !== confirmPassword) {
               console.log('passwords must match')
               setEmail('')
               setUserName('')
               setPassword('')
               setConfirmPassword('')
          } else {
               dispatch(authenticate({username, email, password, method: method}))
               setEmail('')
               setUserName('')
               setPassword('')
               setConfirmPassword('')
          }
     }
     
    return (
        <Form onSubmit={handleSubmit}>
           <Form.Group className="mb-3">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control type = 'email' value = {email} placeholder= 'Enter email' onChange={(e) => setEmail(e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3">
                <Form.Label>Username:</Form.Label>
                <Form.Control type = 'text' value = {username} placeholder= 'Enter name' onChange={(e) => setUserName(e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3">
                <Form.Label>Password:</Form.Label>
                <Form.Control type = 'password' value = {password} placeholder= 'Enter password' onChange={(e) => setPassword(e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3">
                <Form.Label>Confirm password:</Form.Label>
                <Form.Control type = 'password' value = {confirmPassword} placeholder= 'Enter password' onChange={(e) => setConfirmPassword(e.target.value)}/>
           </Form.Group>
           <Button variant="primary" type = 'submit' onClick={handleClose2}>Register</Button>
        </Form>
    )
}