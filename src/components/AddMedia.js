import React from 'react'
import {useState} from 'react';

export const AddMedia = (props) => {
    const [title,setTitle] = useState("");
    const [subtitle,setSubtitle] = useState("");
    const onsubmit = (e) => {
        e.preventDefault();
        if(!title||!subtitle){
            alert("title or subtitle cannot be blank");
        }
        props.addMedia(title,subtitle);
    }
    return (
        <div className="container my-3">
            <h3>Add a song</h3>
            <form onSubmit={onsubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Song title</label>
                    <input type="text" value={title} className="form-control" id="songTitle" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter song's title" />
                
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Song subtitle</label>
                    <input type="text" value={subtitle} className="form-control" id="songSubtitle" onChange={(e)=>{setSubtitle(e.target.value)}} placeholder="Enter song's subtitle" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">upload song</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
