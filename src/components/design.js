import React from 'react'
import './Projects.css'
import PlutoImg from '../assets/pluto_mockup.svg'
import FluxImg from '../assets/flux_mockup.svg'
import flockImg from '../assets/flock_mockup.svg'


export const Design = () => {
    return(
        <div className='projects-inner-container'>
                <div className='project-in-progress'>
                    <div className='title'>PLUTO</div>
                    <img src={ PlutoImg } className="project-img-mobile" id='#plutoImg' alt="pluto"/>
                    <div className='tech-stack'>Optimization, User Testing, Prototyping</div>
                    <div className='project-description'>UI/UX improvement for nwPlus’ hacker-management application—tracking hacker info, meals/event attendance.</div>
                </div>

                <div className='project-in-progress'>
                    <div className='title'>FLUX</div>
                    <img src={ FluxImg } className="project-img-mobile" id='#fluxImg' alt="flux"/>
                    <div className='tech-stack'>Lo-fi, Hi-fi, Competitive analysis, Moodboarding</div>
                    <div className='project-description'>A centralized hiring platform for recruiters to effectively and efficiently evaluate UX design job applicant.</div>
                </div>

                <div className='project-in-progress'>
                    <div className='title'>FLOCK</div>
                    <img src={ flockImg } className="project-img-web" id='#flockImg' alt="flock"/>
                    <div className='tech-stack'>User research, Competitive analysis, Product design</div>
                    <div className='project-description'>Platform for creating and joining study groups in-person; fostering an immersive and engaging learning experience.</div>
                </div>
        </div>
    )
}

export default Design