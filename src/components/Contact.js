import React from 'react'
import './Contact.css'
// import wave from '../assets/wave.svg'
import mail from '../assets/mail.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import spotify from '../assets/spotify.svg'

export const Contact = () => {
    function handleMail() { window.open('mailto:joanne.jiwoo@gmail.com?')}
    function handleLinkedin() { window.open('https://www.linkedin.com/in/joanne-lee-03a8901ab/'); }
    function handleGithub() { window.open('https://github.com/joannelex'); }
    function handleSpotify() { window.open('https://open.spotify.com/user/53sjz5nkmy7u9ax0k6scho4md?si=c03cb1a401bd4c8d'); }

    return(
        <div className="contact-container">
            {/* <img src={ wave } id="wave" alt="wave"/> */}
            <div className='contact-text-container'>
                <div className='contact-text'>Id love to talk to you more about our interests, career and anything else that sparks a light in our intriguing concept of  mind. 
                    Who knows? Maybe the lone, silly question from our light conversation can mark a beginning of some history.
                </div>

                <div className='thanks-container'>
                    <div className='thanks'>thanks for visiting!</div>
            </div>
           </div>
           <div className='contact-icons'>
                <button className="contact-icon-button"><img src={ mail } className="contact-icon" alt="mail" onClick={handleMail}/></button>
                <button className="contact-icon-button"><img src={ linkedin } className="contact-icon" alt="linkedin" onClick={handleLinkedin}/></button>
                <button className="contact-icon-button"><img src={ github } className="contact-icon" alt="github" onClick={handleGithub}/></button>
                <button className="contact-icon-button"><img src={ spotify } className="contact-icon" alt="spotify" onClick={handleSpotify}/></button>
           </div>
        </div>
    )
}

export default Contact