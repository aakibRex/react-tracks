import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
    const text_style = {
        color:"lightBlue"
    }
    return (
        <div>
            <nav className="navbar  fixed-top " style={{backgroundColor:"black"}}>
                <a class="navbar-brand" href="valuebound.com">
                    <img src="logo192.png" width="30" height="30" alt="logo"/>
                     <strong style={text_style}>{props.title}</strong>
                </a>
               {/* <span className="navbar-brand mb-0 h1">{props.title}</span> */}
            </nav>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string
}
Header.defaultProps = {
    title: "Title here"
}