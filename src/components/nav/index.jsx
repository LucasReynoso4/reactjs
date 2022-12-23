import React from "react";
import "./styles.css";

const Navbar = ({children}) => {
    return(
        <div className="navbar">
            <div>
        <h2>FAMILY burger</h2>
            </div>
            {children}
        </div>

    )
}

export default Navbar; 