import React from "react";
import './footer.css';
import cycles_human from '../../images/cycles-human.png'
import { Link } from "react-router-dom";

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
        });
    };

    return (
        <nav className="section4">
            <div className="bottom-nav">
                <a href="/">
                    <img alt="cycles human icon" className="bottom-nav-logo" src={cycles_human}/>
                </a>
                <div className="bottom-nav-links">
                    <Link onClick={scrollToTop} to="/">Home</Link> 
                    <hr className="rounded2"/>
                    <Link onClick={scrollToTop} to="/TOS">Terms of Service</Link>
                    <hr className="rounded2"/>
                    <Link onClick={scrollToTop} to="/PrivacyPolicy">Privacy Policy</Link>
                    <hr className="rounded2"/>
                    <Link onClick={scrollToTop} to="/EULA">EULA</Link>
                    <hr className="rounded2"/>
                    <a href="mailto:cycles@cyclesstudis.com">Contact</a>
                </div>
            </div>
            {/* <hr className="rounded3"/>
            <p className="bottom-nav-text">2023 by cycles studios inc.</p> */}
        </nav>
    );
}

export default Footer;