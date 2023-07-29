import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

export const ImagePreview = ({images}) => {
    
    const clickHandler = async (id) => {
        for(let i = 0; i < images.length; i++) {
            if(images[i].id === id) {
                await images.splice(i,i)
            }
        }
    }

    return (
        <div>
            <h1>Image Preview</h1>
            {images && images.length ? images.map((image) => (
                <div>
                    <img src = {image.src}
                        alt = {`img - ${image.id}`}
                        className = 'w-40'
                    />
                    <Button variant="secondary" onClick = {() => clickHandler(image.id)}>Delete</Button>
                </div>
            )): null}
        </div>
    )
}