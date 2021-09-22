import React from 'react'
import { MediaItems } from "./mediaItems";


export const Medias = (props) => {
return (
    <div className="container">
              
        {
            props.medias.length === 0 ? "no songs to display" :
                          props.medias.map((song) => {
                            return <MediaItems song={song} key={song.sno} onDelete={props.onDelete} />
                        })
            }
        
    </div>
         
        )
 }
     
    
         
