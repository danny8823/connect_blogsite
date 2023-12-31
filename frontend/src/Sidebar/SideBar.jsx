import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delFav, fetchFavs } from "../Slices/favsSlice";
import {Avatar} from "@mui/material"
import {Link} from "react-router-dom"
export const SideBar = () => {
    const loggedIn = useSelector((state) => !!state.me.me.id)
    const {me} = useSelector((state) => state.me)
    const favs = useSelector((state) => state.favs.favs)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchFavs(me.id))
    },[dispatch, me])

    const deleteHandler = async(id) => {
        await dispatch(delFav(id))
    }

    return (
        <div className = 'flex flex-col h-auto w-5/12 bg-red-300 text-center m-0 justify-between'>
            <div>
                {loggedIn ? (
                    <div className = 'm-auto '>
                        <p className = 'mt-8'>Hello {me.username}</p>
                        <Avatar className = 'm-auto w-32' alt = {me.username} src = {me.image}/>
                        <section>
                            <p>Favorites:</p>
                            {favs && favs.length ? (
                                favs.map((fav) => (
                                    <div key = {fav.id}>
                                        <h1>{fav.title}</h1>
                                        <button onClick={() => deleteHandler(fav.id)}>Delete</button>
                                    </div>
                                ))
                            ): (
                                <p>No blogs in favorites list.</p>
                            )}
                        </section>
                    </div>
                ): (
                    <div className = 'm-auto '>
                        <p className = 'mt-8'>Hello Guest!</p>
                    </div>
                )}
            </div>
            <div>
                <Link className = 'no-underline' to = '/'>Home</Link><br/>
                <Link className = 'no-underline' to = '/about'>About</Link><br/>
                <Link className = 'no-underline' to = '/about'>Contact</Link><br/>
                <small>This site trademarked by Connect Blogsite</small>
            </div>
        </div>
    )
}