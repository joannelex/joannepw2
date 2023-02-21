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
                    I’m Joanne, and I am a student developer, artist and a 3rd year computer science student at UBC.
                </div>
                <div className='space'></div>
                <div className='about-text'>
                    Currently, I am working as a Junior Software Engineer Intern @Trulioo. When I’m not coding,
                    you can catch me with my fellow nwPlus members- organizing western Canada's biggest hackathons, 
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