import './Projects.css'
import wasteDownImg from '../assets/waste-down-mockup.svg'
import nomMockImg from '../assets/nomMock.png'
import roosterImg from '../assets/rooster-mockup.svg'
import navImg from '../assets/nav_mockup.svg'
import pwImg from '../assets/pw_mockup.svg'

import { Link } from 'react-router-dom';


export const Swe = () => {
    return(
        <div className='projects-inner-container'>

                <div className='project'>
                    <Link to="/nom" className='project-link'>
                        <div className='title'>NOM</div>
                        <img src={ nomMockImg } className="project-img-mobile" id='#nomMockImg' alt="nom"/>
                        <div className='tech-stack'>NextJS, React, Express, Firebase, bland.ai, Figma</div>
                        <div className='project-description'>New way to plan your lunches—handles recommendations, voting and booking for your group using 
                        Google Places and AI</div>
                    </Link>
                </div>

                <div className='project-in-progress'>
                    <div className='title'>WASTE-DOWN</div>
                    <img src={ wasteDownImg } className="project-img-mobile" id='#wasteDownImg' alt="wasteDown"/>
                    <div className='tech-stack'>SQL, React Native, JS, Firebase</div>
                    <div className='project-description'>A virtual thrifting system aimed towards reducing clothing waste and fast-fashion.</div>
                </div>

                <div className='project-in-progress'>
                    <div className='title'>ROOSTER</div>
                    <img src={ roosterImg } className="project-img-mobile" id='#roosterImg' alt="rooster"/>
                    <div className='tech-stack'>React Native, JS, Python, Flask, REST API</div>
                    <div className='project-description'>Personalized alarm system that uses machine learning to generate the most reactive alarm music.</div>
                </div>

                <div className='project-in-progress'>
                    <div className='title'>NAVIGATOR</div>
                    <img src={ navImg } className="project-img-web" id='#navImg' alt="navigator"/>
                    <div className='tech-stack'>React, JS, HTML/CSS, MongoDB, Netlify</div>
                    <div className='project-description'>An organized rating system for our weekly team lunches.</div>
                </div>

                <div className='project-in-progress'>
                    <div className='title'>MY COZY SPACE</div>
                    <img src={ pwImg } className="project-img-web" id='#pwImg' alt="pw"/>
                    <div className='tech-stack'>React, JS, HTML/CSS, Flask</div>
                    <div className='project-description'>My cozy space- a creative space for me to showcase my tech journey.</div>
                </div>
        </div>

    )
}

export default Swe