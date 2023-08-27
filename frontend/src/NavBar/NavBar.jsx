import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Slices/authSlice";
import newLogo from '../Logo/connect.svg'
import { Navbar, Nav, Container } from "react-bootstrap";

export const NavBar = () => {
    const loggedIn = useSelector((state) => !!state.me.me.id)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [ show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const [ show2, setShow2] = useState(false)
    const handleClose2 = () => setShow2(false)
    const handleShow2 = () => setShow2(true)
    
    const handleLogout = () => {
        navigate('/')
        dispatch(logout())
        
    }

    return (
        <div>
            {loggedIn ? (
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                    <Navbar.Brand href="#home">Connect Blog</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/post">Post</Nav.Link>
                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        <Nav.Link href ='/profile'>Profile</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
            ): (
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">Connect Blog</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link onClick={handleShow}>Login</Nav.Link>
                                <Modal show = {show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Login</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><Login handleClose={handleClose}/></Modal.Body>
                                <Modal.Footer>
                                        <Button variant = 'secondary' onClick = {handleClose}>
                                        Close
                                        </Button>
                                </Modal.Footer>    
                                </Modal>
                            <Nav.Link onClick={handleShow2}>Register</Nav.Link>
                            <Modal show = {show2} onHide={handleClose2}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Register</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><Register handleClose2={handleClose2}/></Modal.Body>
                                <Modal.Footer>
                                    <Button variant = 'secondary' onClick = {handleClose2}>
                                        Close
                                    </Button>
                                </Modal.Footer>    
                            </Modal>    
                        </Nav>
                    </Container>
                </Navbar>
            )}   
        </div>
    )
}