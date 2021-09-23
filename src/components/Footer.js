import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "relative",
        width: "100%",
        top: "30vh",
        backgroundColor:"black"
        // backgroundImage: "linear-gradient(to bottom right, black, green)"
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
