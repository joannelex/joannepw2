import React from 'react'
import './Projects.css'
import wasteDownImg from '../assets/wasteDown.png'
import roosterImg from '../assets/rooster.png'
import crown from '../assets/crown.svg'
import pwImg from '../assets/pw.png'
import { useState } from 'react'


export const Projects = () => {
    const [wasteDown, setWasteDown] = useState(true);
    const [rooster, setRooster] = useState(true);
    const [pw, setPw] = useState(true);

    function handleWasteDown() {
        setWasteDown(!wasteDown);
        wasteDown ? document.getElementById('#wasteDownImg').style.marginLeft = "100px" : document.getElementById('#wasteDownImg').style.marginLeft = "-330px";
    }

    function handleRooster() {
        setRooster(!rooster);
        rooster ? document.getElementById('#roosterImg').style.marginLeft = "100px" : document.getElementById('#roosterImg').style.marginLeft = "-330px";
    }

    function handlePw() {
        setPw(!pw);
        pw ? document.getElementById('#pwImg').style.marginLeft = "100px" : document.getElementById('#pwImg').style.marginLeft = "-330px";
    }

    function handlePwGithub() {window.open('https://github.com/joannelex/myCozySpace'); }
    function handlePwFigma() {window.open('https://www.figma.com/file/c0P8zAGNhVRDML0WN0PbdD/Untitled?node-id=0%3A1&t=mXPCI3uKkhLymkdK-1'); }
    function handleRoosterGithub() { window.open('https://github.com/joannelex/rooster'); }
    function handleRoosterDevpost() {window.open('https://devpost.com/software/rooster-45y9sc');}
    function handleWDGithub() {window.open('https://github.com/joannelex/Waste-Down');}
    function handleWDDevpost() {window.open('https://devpost.com/software/wastedown'); }
    function handleWDFigma() {window.open('https://www.figma.com/file/ixZM9ae5SXjGC1VrgjI9hB/HTN-(Copy)?node-id=0%3A1&t=udn2gne30oMRxljt-1'); }


   
    return(
        <div className="projects-container">

            <div className='project'>
                <img src={ wasteDownImg } className="project-img" id='#wasteDownImg' alt="wasteDown"/>
                <div className='number'>01</div>
                <div className='title-container' onClick={handleWasteDown}>
                    <div className='left'>
                        <div className='title'>WASTE-DOWN</div>
                        <div className='project-status'>team project @hack the north</div>
                    </div>
                    <div className='right'>
                        <div className='project-description'>A virtual thrifting system aimed towards reducing clothing waste and fast-fashion.</div>
                        <div className='tech-stack'>SQL, React Native, Java, Firebase</div>
                        <div className='buttons-container'>
                            <button className='project-button' onClick={ handleWDFigma}>figma</button>
                            <button className='project-button' onClick={ handleWDDevpost }>devpost</button>
                            <button className='project-button' onClick={ handleWDGithub }>github</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='project' id='rooster-project'>
                <img src={ roosterImg } className="project-img" id='#roosterImg' alt="rooster"/>
                <div className='number'>02</div>
                
                <div className='title-container' onClick={handleRooster}>
                    <div className='left'>
                        <img src={ crown } id='crown' alt="crown"/>
                        <div className='title'>ROOSTER</div>
                        <div className='project-status'>team project @youth hacks</div>
                        <div className='winning-status'>2nd place winner</div>
                    </div>
                    <div className='right'>
                        <div className='project-description'>personalized alarm system that uses machine learning to generate the most reactive alarm music.</div>
                        <div className='tech-stack'>SQL, React Native, Java, Firebase</div>
                        <div className='buttons-container'>
                            <button className='project-button' onClick={handleRoosterDevpost}>devpost</button>
                            <button className='project-button' onClick={handleRoosterGithub}>github</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='project' id='pw-project'>
                <img src={ pwImg } className="project-img" id='#pwImg' alt="pw"/>
                <div className='number'>03</div>
                <div className='title-container' onClick={handlePw}>
                    <div className='left'>
                        <div className='title'>PERSONAL WEBSITE</div>
                        <div className='project-status'>personal project</div>
                    </div>
                    <div className='right'>
                        <div className='project-description'>my cozy space- a creative space for me to showcase my growth as a developer.</div>
                        <div className='tech-stack'>React, CSS, JavaScript</div>
                        <div className='buttons-container'>
                            <button className='project-button' onClick={handlePwFigma}>figma</button>
                            <button className='project-button' onClick={handlePwGithub}>github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects