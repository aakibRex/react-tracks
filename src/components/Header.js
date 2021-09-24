import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
    const text_style = {
        color:"lightBlue"
    }
    return (
        <div>
            <nav className="navbar  fixed-top " style={{backgroundColor:"black"}}>
                <a className="navbar-brand" href="valuebound.com">
                    <img src="logo192.png" width="30" height="30" alt="logo"/>
                     <strong style={text_style}>{props.title}</strong>
                </a>
            </nav>
        </div>
    )
}
// setting the type of title as string. 
Header.propTypes = {
    title: PropTypes.string
}
// setting the default value of title which comes into action when no title is passed from medias.js to mediaitems.js.
Header.defaultProps = {
    title: "Title here"
}