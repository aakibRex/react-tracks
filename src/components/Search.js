import React from 'react'
import {useState} from 'react';

export const Search = ({search}) => {
    const [query,setQuery] = useState("");
    const onsubmit = (e) => {
        e.preventDefault();
        if(!query){
            alert("search field cannot be blank");
        }
        search(query);
    }
    let div_style = {
        marginTop: "100px",
        marginBottom: "50px",
    }
    return (
        <div className="container" style={div_style}>
            <form className="d-flex" onSubmit={onsubmit}>
                <input className="form-control me-2" name="search" value={query} type="text" placeholder="Search" onChange={(e)=>{setQuery(e.target.value)}} aria-label="Search" />
                <button className="btn btn-outline-success" type="submit" >Search</button>
            </form>
        </div>
    )
}


