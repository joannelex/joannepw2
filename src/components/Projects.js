import React from 'react'
import './Projects.css'
import wasteDownImg from '../assets/wasteDown.png'
import roosterImg from '../assets/rooster.png'
import crown from '../assets/crown.svg'
import pwImg from '../assets/pw.png'
import { useState } from 'react'


export const Projects = () => {
    const [wasteDown, setWasteDown] = useState(false);
    const [rooster, setRooster] = useState(false);
    const [pw, setPw] = useState(false);

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
                            <div className='project-button'>figma</div>
                            <div className='project-button'>devpost</div>
                            <div className='project-button'>github</div>
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
                            <div className='project-button'>devpost</div>
                            <div className='project-button'>github</div>
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
                            <div className='project-button'>figma</div>
                            <div className='project-button'>github</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects