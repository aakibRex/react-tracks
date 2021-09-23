import React from 'react'
import "../components/mediaitems.css"
import { useState } from 'react';

export const MediaItems = ({ song, onDelete }) => {
    const h4_style = {
        color: "white",
    }
    const p_style = {
        color: "blue",
    }

    const [likes, setLikes] = useState(Number(song.like));
    const getLikes = () => {
        const likeCount = Number(song.like) + 1;
        setLikes(likeCount);
    }

    return (

        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div class="card">
                <div class="card-body">
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
                            <button type="button" className="btn-del btn-sm btn-danger" onClick={() => { onDelete(song) }}><i class="fa fa-trash"></i></button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
