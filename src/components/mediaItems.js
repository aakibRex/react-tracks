import React from 'react'
import "../components/mediaitems.css"

export const MediaItems = ({ song, onDelete }) => {
    let h4_style = {
        color: "navy",
    }
    let p_style = {
        color: "gray",
    }

    return (

                <>
                <div className="parent">
                    <div className="likes child">
                        <p>{song.like} likes</p>
                    </div>

                    <div className="title child">
                    <h4  style={h4_style}>{song.title}</h4>
                    <p  style={p_style}>{song.desc}</p>
                    </div>

                    <div className="audio-bar child">
                    <audio  controls>
                        <source src="" type="audio/mpeg"/>
                    </audio>
                    </div>

                    <div className="button child">
                    <button  type="button" className="btn btn-sm btn-danger" onClick={() => { onDelete(song) }}>DELETE</button>
                    </div>
               
                </div>
                <hr/>
                </>
    )
}
