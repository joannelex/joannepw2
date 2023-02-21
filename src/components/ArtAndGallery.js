import React from 'react'
import './ArtAndGallery.css'
import ipad from '../assets/ipad.svg'
import jennie from '../assets/jennie.png'
import naeun from '../assets/naeun.png'
import rose from '../assets/rose.png'

import magazine from '../assets/magazine.png'
import mirror from '../assets/mirror.png'
import jam from '../assets/jam.png'

export const ArtAndGallery = () => {

    return(
        <div className="art-container">
            <div className='gallery-text'>
            The harmony between fine lines and colours never fail to amuse me. From landscapes to animals, 
            I like to grab my pen and sculpt my mind on the paper during my free time. Lately, I’ve been into figure 
            drawing- here are some of my recent digital works!
            </div>

            <div className='gallery-container'>
                <img src={ ipad } id="ipad" alt="ipad"/>
                <div className='drawings'>
                    <div>
                        <img src={ naeun } className="sketch" id="naeun" alt="naeun"/>
                        <img src={ rose } className="sketch" alt="rose"/>
                        <img src={ jennie } className="sketch" alt="jennie"/>
                    </div>

                    <div className='digital'>
                        <img src={ magazine } className="digital-drawing" alt="magazine" />
                        <img src={ mirror } className="digital-drawing" id="mirror" alt="mirror"/>
                        <img src={ jam } className="digital-drawing" id="jam" alt="jam"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtAndGallery