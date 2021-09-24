import React from 'react'
import {useState} from 'react';

export const AddMedia = (props) => {
    //  title and subtitle will hold the values coming from input text boxes viz. song's title input box
    //  and song's subtitle input box. This input boxes have an onchange event as attributes where an arrow
    //  function is defined which calls setTitle and setSubtitle function for changing the value of input 
    //  boxes. React's state hook is used for carrying out these all stuffs.
    const [title,setTitle] = useState("");
    const [subtitle,setSubtitle] = useState("");
    const onsubmit = (e) => {
        e.preventDefault();
        if(!title||!subtitle){
            alert("title or subtitle cannot be blank");
        }
        // calling the addMedia() function defined and imported from app.js using props with title and 
        // subtitle as arguments which holds input text boxes data.
        props.addMedia(title,subtitle);
        // setting the textboxes empty after add button is clicked.
        setTitle("");
        setSubtitle("");
    }
    const text_style = {
        color:"white"
    }
    return (
        // this will render the form for song addition.
        <div className="container my-3">
            <h3 style={text_style}>Add a song</h3>
            <form onSubmit={onsubmit}>
                <div className="form-group">
                    <label style={text_style} htmlFor="exampleInputEmail1">Song title</label>
                    <input type="text" value={title} className="form-control" id="songTitle" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter song's title" />
                
                </div>
                <div className="form-group">
                    <label style={text_style} htmlFor="exampleInputPassword1">Song subtitle</label>
                    <input type="text" value={subtitle} className="form-control" id="songSubtitle" onChange={(e)=>{setSubtitle(e.target.value)}} placeholder="Enter song's subtitle" />
                </div>
                <div className="form-group">
                    <label style={text_style} htmlFor="exampleFormControlFile1">upload song</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
