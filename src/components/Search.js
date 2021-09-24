import React from 'react'
import {useState} from 'react';

export const Search = ({search}) => {
    // query will store the search box input and initially it set empty.
    const [query,setQuery] = useState("");
    const onsubmit = (e) => {
        e.preventDefault();
        if(!query){
            alert("search field cannot be blank");
        }
        // calling the search function defined in app.js with argument query which holds search box input.
        search(query);
        setQuery("");
    }
    let div_style = {
        marginTop: "100px",
        marginBottom: "50px",
    }
    return (
        <div className="container" style={div_style}>
            <form className="d-flex" onSubmit={onsubmit}>
                <input className="form-control me-2 search-box"  name="search" value={query} type="text" placeholder="Search" onChange={(e)=>{setQuery(e.target.value)}} aria-label="Search" />
                <button className="btn btn-dark search-box" type="submit" >Search</button>
            </form>
        </div>
    )
}


