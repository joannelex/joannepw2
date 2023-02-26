import React from 'react'
import './About.css'
import headshot from '../assets/headshot.png'

export const About = () => {
    function handleUBC() {window.open('https://www.ubc.ca/')};
    function handleTrulioo() {window.open('https://www.trulioo.com/')};
    function handleNwPlus() {window.open('https://nwplus.io/')};

    return(
        <div className="about-container">
            <div className='about-text-container'>
                <div className='hi'>hi,</div>
                <div className='about-text'>Nice to see you here!</div>
                <div className='about-text'>
                    I’m Joanne (she/her), and I am a <b>student developer</b>, <b>artist</b> and a 3rd year <b>computer science student</b> at UBC.
                </div>
                <div className='space'></div>
                <div className='about-text'>
                    Currently, I am working as a <b>Junior Software Engineer Intern @Trulioo</b>. When I’m not coding,
                    you can catch me with my fellow <b>nwPlus</b> members- organizing western Canada's biggest hackathons, 
                    at the pool, or catching the Vancouver sunset (:
                </div>
                
                <div className='about-buttons'>
                    <button className='about-button' onClick={handleUBC}>UBC</button>
                    <button className='about-button' onClick={handleTrulioo}>Trulioo</button>
                    <button className='about-button' onClick={handleNwPlus}>cmd-f logistics coordinator @nwPlus</button>
                </div>
            </div>

            <img src={ headshot } className="headshot" alt="headshot"/>
        </div>
    )
}

export default About