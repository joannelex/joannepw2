import React from 'react'
import './Contact.css'
import wave from '../assets/wave.svg'
import mail from '../assets/mail.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

export const Contact = () => {
    function handleMail() { window.open('mailto:joanne.jiwoo@gmail.com?')}
    function handleLinkedin() { window.location.href = 'https://www.linkedin.com/in/joanne-lee-03a8901ab/'; }
    function handleGithub() { window.location.href = 'https://github.com/joannelex'; }

    return(
        <div className="contact-container">
            <img src={ wave } id="wave" alt="wave"/>
            <div className='thanks-container'>
                <div className='thanks'>thanks for</div>
                <div className='thanks'>visiting!</div>
           </div>
           <div className='contact-icons'>
                <button className="contact-icon-button"><img src={ mail } className="contact-icon" alt="mail" onClick={handleMail}/></button>
                <button className="contact-icon-button"><img src={ linkedin } className="contact-icon" alt="linkedin" onClick={handleLinkedin}/></button>
                <button className="contact-icon-button"><img src={ github } className="contact-icon" alt="github" onClick={handleGithub}/></button>
           </div>
        </div>
    )
}

export default Contact