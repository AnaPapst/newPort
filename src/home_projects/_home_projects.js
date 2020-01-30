import React from 'react';
import PicOmni from '../img/omni.jpg';
import PicFace from '../img/face.jpg';
import PicRobo from '../img/robo.jpg';
import PicDrum from '../img/drum.jpg';

function homeProjects() {
    return (
        <div>
            <div className="homeProjects">
                <h2 className="homeProjects__title">Projects</h2>
                <p>I'm an IT student, and I've been practicing and working as a front-end developer, as well 
                as some Architecture 3D sketchs and modeling as a freelancer.
                </p>
                <div className="homeProjects__imagens">
                    <div className="homeProjects__img1-2">
                        <p><img src={PicOmni} className="omniImg" alt="omni foto" /></p>
                        <p><img src={PicFace} className="drumImg" alt="omni foto" /></p>
                    </div>
                    <div className="homeProjects__img3-4">
                        <p><img src={PicRobo} className="roboImg" alt="omni foto" /></p>
                        <p><img src={PicDrum} className="drumImg" alt="omni foto" /></p>
                    </div>
                </div>
            </div>                                                                  
        </div>
    );
}


export default homeProjects;