import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import GitHub from '@iconscout/react-unicons/icons/uil-github'
import wave from '../../img/wave.png'


const Footer = () => {
  return (
    <div className="footer">
        <img src={wave} alt="" style={{width: '100%', height: '30%'}}/>
        <div className="f-content">
            <span>saqibfaraz10@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem'/>
                <Facebook color='white' size='3rem'/>
                <GitHub color='white' size='3rem'/>
            </div>

        </div>
    </div>
  )
}

export default Footer
