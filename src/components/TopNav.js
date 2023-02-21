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
                <a href="#about"><button className='nav-button'>about</button></a>
                <a href="#projects"><button className='nav-button'>projects</button></a>
                <a href="#artAndGallery"><button className='nav-button'>art + gallery</button></a>
                <a href="#contactMe"><button className='nav-button'>contact me</button></a>
            </div>
      </div>
    )
}

export default TopNav