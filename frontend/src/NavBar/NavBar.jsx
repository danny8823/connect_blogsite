import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className = 'flex justify-start bg-slate-300 h-10 items-center'> 
            <p className = ' px-10'>Logo</p>
            <Link className = 'px-5' to ='/blogs'>Blogs</Link>
            <Link className = 'px-5' to ='/post'>Post</Link>
            <Link className = 'px-5' to ='/login'>Login</Link>
        </div>
    )
}