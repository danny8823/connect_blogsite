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
                <div className = 'flex justify-start bg-sky-300 h-16 items-center w-screen m-0'>
                    <img src = {newLogo} alt = 'connect blog logo' className = 'w-40 h-auto px-10'/>
                    <Link className = 'px-5 no-underline text-black' to ='/'>Blogs</Link>
                    <Link className = 'px-5 no-underline text-black' to ='/post'>Post</Link>
                    <Link className = 'px-5 no-underline text-black' onClick={handleLogout}>Logout</Link>
                    <Link className = 'px-5 no-underline text-black' to ='/profile'>Profile</Link>
                </div>
            ): (
                <div className = 'flex justify-start bg-sky-300 h-16 items-center w-screen m-0'>
                    <img src = {newLogo} alt = 'connect blog logo' className = 'w-40 h-auto px-10'/>
                    <Link className = 'px-5 no-underline text-black' to ='/'>Blogs</Link>
                    <Link className = 'px-5 no-underline text-black' onClick={handleShow}>Login</Link>
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
                    <Link className = 'px-5 no-underline text-black' onClick={handleShow2}>Register</Link>
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
                </div>
            )}   
        </div>
    )
}