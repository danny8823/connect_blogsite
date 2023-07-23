import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delFav, fetchFavs } from "../Slices/favsSlice";

export const SideBar = () => {
    const loggedIn = useSelector((state) => !!state.me.me.id)
    const me = useSelector((state) => state.me.me)
    const favs = useSelector((state) => state.favs.favs)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchFavs(me.id))
    },[dispatch, me])

    const deleteHandler = (id) => {
        dispatch(delFav(id))
    }

    return (
        <div className = 'h-auto w-72 bg-red-300 text-center'>
            {loggedIn ? (
                <div className = 'm-auto '>
                    <p className = 'mt-8'>Hello {me.username}</p>
                    <img className = 'm-auto w-32 rounded-full' src = {me.image} alt = 'profile'/>
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
    )
}