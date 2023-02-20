import React from 'react'
import './TopNav.css'

export const TopNav = () => {

    return(
        <div className="topNavBar">
            <div className="name-container">
                <div>Joanne</div>
                <div>Lee</div>
            </div>
            <div className='horizontal-line'/>

            <div>
                <a href="#about-page"><button className='nav-button'>about</button></a>
                <a href="#projects-page"><button className='nav-button'>projects</button></a>
                <a href="#artAndGallery-page"><button className='nav-button'>art + gallery</button></a>
                <button className='nav-button'>contact me</button>
            </div>
      </div>
    )
}

export default TopNav