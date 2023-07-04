import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const Register = () => {
    return (
        <Form>
           <Form.Group className="mb-3">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control type = 'email' placeholder= 'Enter email'/>
           </Form.Group>
           <Form.Group className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control type = 'text' placeholder= 'Enter name'/>
           </Form.Group>
           <Form.Group className="mb-3">
                <Form.Label>Password:</Form.Label>
                <Form.Control type = 'password' placeholder= 'Enter password'/>
           </Form.Group>
           <Form.Group className="mb-3">
                <Form.Label>Confirm password:</Form.Label>
                <Form.Control type = 'password' placeholder= 'Enter password'/>
           </Form.Group>
           <Button variant="primary">Register</Button>
        </Form>
    )
}