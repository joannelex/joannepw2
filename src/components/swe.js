import './Projects.css'
import wasteDownImg from '../assets/waste-down-mockup.svg'
import roosterImg from '../assets/rooster-mockup.svg'
import navImg from '../assets/nav_mockup.svg'
import pwImg from '../assets/pw_mockup.svg'



export const Swe = () => {
    return(
        <div className='projects-container-ver'>
            <div className='projects-container-hor'>
                <div className='project'>
                    <div className='title'>WASTE-DOWN</div>
                    <img src={ wasteDownImg } className="project-img-mobile" id='#wasteDownImg' alt="wasteDown"/>
                    <div className='tech-stack'>SQL, React Native, JS, Firebase</div>
                    <div className='project-description'>A virtual thrifting system aimed towards reducing clothing waste and fast-fashion.</div>
                </div>

                <div className='project'>
                    <div className='title'>ROOSTER</div>
                    <img src={ roosterImg } className="project-img-mobile" id='#roosterImg' alt="rooster"/>
                    <div className='tech-stack'>React Native, JS, Python, Flask, REST API</div>
                    <div className='project-description'>Personalized alarm system that uses machine learning to generate the most reactive alarm music.</div>
                </div>
            </div>
            
            <div className='projects-container-hor'>
                <div className='project'>
                    <div className='title'>NAVIGATOR</div>
                    <img src={ navImg } className="project-img-web" id='#navImg' alt="navigator"/>
                    <div className='tech-stack'>React, JS, HTML/CSS, MongoDB, Netlify</div>
                    <div className='project-description'>An organized rating system for our weekly team lunches.</div>
                </div>

                <div className='project'>
                    <div className='title'>MY COZY SPACE</div>
                    <img src={ pwImg } className="project-img-web" id='#pwImg' alt="pw"/>
                    <div className='tech-stack'>React, JS, HTML/CSS, Flask</div>
                    <div className='project-description'>My cozy space- a creative space for me to showcase my tech journey.</div>
                </div>
            </div>
        </div>

    )
}

export default Swe