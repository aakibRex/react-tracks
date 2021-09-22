import React from 'react'
import "../components/mediaitems.css"

export const MediaItems = ({ song, onDelete }) => {
    let h4_style = {
        color: "navy",
    }
    let p_style = {
        color: "gray",
    }
    // let card_style = {
    //     display:"inline",
    // }

    return (

                <>
                <div className="parent container d-flex justify-content-around">
                    <div>
                        {song.like} likes
                    </div>

                    <div>
                    <h4  style={h4_style}>{song.title}</h4>
                    <p  style={p_style}>{song.desc}</p>
                    </div>

                    <div>
                    <audio  controls>
                        <source src="" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div>
                    <button  type="button" className="btn btn-sm btn-danger" onClick={() => { onDelete(song) }}>DELETE</button>
                    </div>
               
                </div>
                <hr/>
                </>
    )
}
