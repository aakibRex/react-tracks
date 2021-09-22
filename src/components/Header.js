import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
    return (
        <div>

            <nav className="navbar  fixed-top navbar-dark bg-dark">
                {/* <a class="navbar-brand" href="#">
                    <img src="logo192.png" width="30" height="30" alt=""/>
                     {props.title}
                </a> */}
                <span className="navbar-brand mb-0 h1">{props.title}</span>
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