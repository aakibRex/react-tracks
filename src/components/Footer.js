import React from 'react'

export const Footer = () => {
    // defining style for footer as a JS object and storing it in a variable named footerstyle.
    const footerStyle = {
        position: "relative",
        width: "100%",
        top: "30vh",
        backgroundColor:"black"
    }
    return (
        
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
            <strong>
            Copyright &copy; ReactTracks.com
            </strong>
            </p>
        </footer>
        
    )
}
