import React from 'react';
import LogoLinkedin from '../img/icons/linkedin.png';

function homeContact() {
    return (
        <div className="homeContact">
            <h2 className="homeContact__title">Contact me</h2>
            <img src={LogoLinkedin} className="homeContact--logoLinkedin" alt="" />
            <p>linkedin.com/in/anapapst</p>
        </div>
    );
}


export default homeContact;