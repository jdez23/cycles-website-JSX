import React from "react";
import './navbar.css'
import cycles_human from '../../images/cycles-human.png'
import cycles_name from '../../images/cycles_name.png'

function Navbar() {
    return (
        <nav className="header">
            <div className="left-nav">
                <a href="/"><img src={cycles_human} alt="cycles human" className="cycles_human" /></a>
                <a href="/"><img src={cycles_name} alt="cycles name" className="cycles_name" /></a>
            </div>
        </nav>
    );
}

export default Navbar;