import React from 'react'
import "../components/mediaitems.css"
import { useState } from 'react';
// have destructured props here. song is one object of medias array. medias array is in app.js
// consisting of JS objects which consists data of the song(sno,like,title,subtitle).medias array is 
// iterated in medias.js and in each iteration one medias object which is stored in song is passed 
// here in mediaitems.js . onDelete is a function defined in app.js and passed on to medais.js and from
// medias.js to mediaitems.js . 
export const MediaItems = ({ song, onDelete }) => {
    const h4_style = {
        color: "white",
    }
    const p_style = {
        color: "blue",
    }
    // storing the like of song object in likes variable.Used React's state hook for creating likes variable 
    // and setLikes function. setLikes function is used to change the current state of likes.
    const [likes, setLikes] = useState(song.like);
    const getLikes = () => {
        const likeCount = song.like + 1;
        setLikes(likeCount);
    }

    return (

        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="card">
                <div className="card-body">
                    <div className="parent">
                        <div className="likes child">
                            <p><strong>{likes}</strong> <button type="button" className="btn btn-sm btn-primary" onClick={getLikes}>Like</button></p>
                        </div>

                        <div className="title child">
                            <h4 style={h4_style}>{song.title}</h4>
                            <p style={p_style}>{song.desc}</p>
                        </div>

                        <div className="audio-bar child">
                            <audio controls>
                                <source src="music.mp3" type="audio/mpeg" />
                            </audio>
                        </div>

                        <div className="button child">
                            <button type="button" className="btn-del btn-sm btn-danger" onClick={() => { onDelete(song) }}><i className="fa fa-trash"></i></button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
