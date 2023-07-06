import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";

export const NavBar = () => {
    const [ show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const [ show2, setShow2] = useState(false)
    const handleClose2 = () => setShow2(false)
    const handleShow2 = () => setShow2(true)
    return (
        <div className = 'flex justify-start bg-slate-300 h-10 items-center'> 
            <p className = ' px-10'>Logo</p>
            <Link className = 'px-5' to ='/'>Blogs</Link>
            <Link className = 'px-5' to ='/post'>Post</Link>
            <Link className = 'px-5' onClick={handleShow}>Login</Link>
                <Modal 
                    show = {show}
                    onHide={handleClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Login/></Modal.Body>
                    <Modal.Footer>
                        <Button variant = 'secondary' onClick = {handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>    
                </Modal>
            <Link className = 'px-5' onClick={handleShow2}>Register</Link>
                <Modal 
                    show = {show2}
                    onHide={handleClose2}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><Register/></Modal.Body>
                    <Modal.Footer>
                        <Button variant = 'secondary' onClick = {handleClose2}>
                            Close
                        </Button>
                    </Modal.Footer>    
                </Modal>
        </div>
    )
}