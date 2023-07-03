import React from "react"
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import GlassesEmoji from '../../img/glassesimoji.png'
import HumbleEmoji from '../../img/humble.png'
import Card from "../Card/Card"
import CV from "../Services/FrontendResume.pdf"

const Services =() =>{
    return(
        <div className="services" id="Services">
            {/*left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <spane>
                    My services includes attractive and modren UI/UX designs,
                    <br />
                    frontend development using Javascript, React JS, and Vue JS
                    <br />
                    communicating with database using APIs, postman and JSON server.
                </spane>
                <a href={CV} download>
                <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1"
                style={{
                    background: '#ABF1FF94'
                }}></div>
            </div>
            {/*right side */}
            <div className="cards">
                <div style={{left: '14rem'}}>
                <Card 
                    size={0.6}
                    marginbottom = '-2rem'
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {'Figma, Adobe Photoshop, Adobe Illustrator, Canva'}
                />
                </div>

                <div style={{top: '12rem', left: '-4rem'}}>
                <Card 
                    size={0.42}
                    marginbottom = '-6.5rem'
                    emoji = {GlassesEmoji}
                    heading = {'Frontend Dev'}
                    detail = {'HTML5, CSS3, Javascript, ReactJs, VueJs'}
                />
                </div>

               
                <div style={{top: '19rem', left: '12rem'}}>
                <Card 
                    size={0.63}
                    marginbottom = '-0.5rem'
                    emoji = {HumbleEmoji}
                    heading = {'Fetching Data'}
                    detail = {'APIs, Vuex, Axios, Postman, JSON server'}
                />
                </div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            
            </div>
        </div>
    );
}

export default Services;