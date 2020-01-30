import React from 'react';
import Picture from '../img/aboutme.jpg';

function homePicture() {
    return (
        <div  className="homePicture">
                <div className="homePicture__title">
                <p className="homePicture__title--name">Ana Papst</p>
                <p className="homePicture__title--rule">FrontEnd Developer</p>
                </div>
        
            <div className="dark-block">
                <div className="dark-block-img"> 
                {/*<img src={Picture} alt='' />*/}
                </div>
            </div>
        </div>
    );
}

export default homePicture;