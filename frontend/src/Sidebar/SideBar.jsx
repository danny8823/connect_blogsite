import React from "react";
import { useSelector } from "react-redux";

export const SideBar = () => {
    const loggedIn = useSelector((state) => !!state.me.me.id)
    const me = useSelector((state) => state.me.me)
    
    
    return (
        <div className = 'h-auto w-72 bg-red-300 text-center'>
            {loggedIn ? (
                <div className = 'm-auto '>
                    <p className = 'mt-8'>Hello {me.username}</p>
                    <img className = 'm-auto w-32 rounded-full' src = {me.image} alt = 'profile'/>
                    <section>
                        <p>Favorites</p>
                    </section>
                </div>
            ): (
                <div className = 'm-auto '>
                    <p className = 'mt-8'>Hello Guest!</p>
                </div>
            )}
        </div>
    )
}