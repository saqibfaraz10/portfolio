import React from "react";
import './Intro.css';
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import self from '../../img/self.jpg';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import GlassesEmoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import {motion} from 'framer-motion';
import { Link } from "react-scroll";

const Intro = () =>{
 const transition = {duration : 2, type : 'spring'};
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Saqib Faraz</span>
                    <span>Frontend developer, expertise in HTML5, CSS3, and React JS, Vue JS</span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="github.com/saqibfaraz10">
                        <img src={GitHub} alt="" />
                    </a>
                    <Link to=""/>
                    <a href="linkedin.com/saqibfaraz10">
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href="instagram.com/sakib.666">
                        <img src={Instagram} alt="" />
                    </a>   
                </div>
            </div>
            <div className="i-right">
                {/* <img src={Vector1} alt="" />
                <img src={Vector2} alt="" /> */}
                <img src={self} alt="" />
                <motion.img
                
                initial = {{left: '-36%'}}
                whileInView={{left: '-24%'}}
                transition={transition}

                src={GlassesEmoji} alt="" />
                
                <div style={{top : '0rem', left : '64%'}} className="floating-div">
                    <FloatingDiv image = {Crown} txt1 = 'Web' txt2 = 'Developer'/>
                </div>
                <div style={{top : '18rem', left : '-15%'}} className="floating-div">
                    <FloatingDiv image={Thumbup} txt1= 'Best Designs' txt2= '' />
                </div>
                <div className="blur" 
                style={{
                    background: "rgb(236 210 255)"
                    }}>
                <div className="blur"
                style={{
                    background: '#C1F5FF',
                    top: '21rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-26rem'
                }}>
                </div>       
                </div>
            </div>
        </div>
    )
}

export default Intro;