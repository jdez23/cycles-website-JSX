import React, { useState } from "react";
import './Home.css'
import mockup_screen from '../../images/cycles_mockup.png'
import cycles_name from '../../images/cycles_name.png'

function Home() {

    const [email, setEmail] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await fetch('https://cycles.herokuapp.com/users/subscription/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            setShowSuccessMessage(true);
            setEmail('');
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        } catch (error) {
        }
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className="body">
            <div className="product1">
                <img alt="following feed screenshot" src={mockup_screen} />
                <div className="right-text">
                    <img alt="cycles name" src={cycles_name} />
                    <h2>Discover<br />user curated playlists</h2>
                    <h3>Find the perfect playlist<br />for any mood or moment</h3>
                    <h3>Coming soon</h3>
                </div>
            </div>
            <hr className="rounded" />
            <div className="emailUpdate">
                <h1 className="emailSignUpText">Sign up for release notification</h1>
                <form className="inputForm" id="sub" onSubmit={handleSubmit} >
                    <input
                        type="email"
                        className="input"
                        placeholder="Enter email here"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required />
                    <button type="submit" className="inputButton" value="Enter">Enter</button>
                </form>
                {showSuccessMessage && (
                    <div className="success-message">
                        Email submitted successfully. Thank you!
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;
