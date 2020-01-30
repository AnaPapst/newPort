import React from 'react';
import Iconhtml from '../img/icons/html5.png';
import Iconcss from '../img/icons/css-3.png';
import Iconjs from '../img/icons/js-format.png';
import Iconreact from '../img/icons/react.png';
import Icongit from '../img/icons/github.png';
import Iconps from '../img/icons/photoshop.png';

function homeSkills() {
    return (
        <div>

            <div className="homeSkills">
                <h2 className="homeSkills__title">Skills</h2>
                <div className="homeSkills__skills1">
                    <p className="homeSkills__html"><img src={Iconhtml} className="homeSkills--icon" alt="html5 icon" /></p>
                    <p className="homeSkills__css3"><img src={Iconcss} className="homeSkills--icon" alt="css icon" /></p>
                    <p className="homeSkills__js"><img src={Iconjs} className="homeSkills--icon" alt="js icon" /></p>
                </div>
                <div className="homeSkills__skills2">
                    <p className="homeSkills__react"><img src={Iconreact} className="homeSkills--icon" alt="html5 icon" /></p>
                    <p className="homeSkills__git"><img src={Icongit} className="homeSkills--icon" alt="html5 icon" /></p>
                    <p className="homeSkills__ps"><img src={Iconps} className="homeSkills--icon" alt="html5 icon" /></p>
                </div>
            </div>

        </div>
    );
}

export default homeSkills;