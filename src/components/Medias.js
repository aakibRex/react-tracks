import React from 'react'
import { MediaItems } from "./mediaItems";

export const Medias = (props) => {
    const p_style = {
        color:"black"
    }
    // medias array is passed here in medias.js from app.js. Iterating over each item of array using map function.
return (
    <div className="container">   
        {props.medias.length === 0 ? <h4 style={p_style}>*no songs to display*</h4>:
                 props.medias.map((song) => {
                   return <MediaItems song={song} key={song.sno} onDelete={props.onDelete} />
                 })
        }
    </div>
        )
 }
     
    
         
