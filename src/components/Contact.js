import React from 'react'
import './Contact.css'
import wave from '../assets/wave.svg'
import mail from '../assets/mail.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

export const Contact = () => {

    return(
        <div className="contact-container">
            <img src={ wave } id="wave" alt="wave"/>
            <div className='thanks-container'>
                <div className='thanks'>thanks for</div>
                <div className='thanks'>visiting!</div>
           </div>
           <div className='contact-icons'>
                <button className="contact-icon-button"><img src={ mail } className="contact-icon" alt="mail"/></button>
                <button className="contact-icon-button"><img src={ linkedin } className="contact-icon" alt="linkedin"/></button>
                <button className="contact-icon-button"><img src={ github } className="contact-icon" alt="linkedin"/></button>
           </div>
        </div>
    )
}

export default Contact