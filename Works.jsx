import React from "react";
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiver from '../../img/fiverr.png'
import Facebook from '../../img/Facebook.png'
import Shopify from '../../img/Shopify.png'
import Amazon from '../../img/amazon.png'
const Works = () =>{
    return(
        <div className="works">
            {/* left side */}
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <spane>
                    Lorem ispum is simpley dummy text of printing of printing Lorem 
                    <br />
                    ispum is simpley dummy text of printing
                    <br />
                    simpley dummy text of printing of printing
                    <br />
                    ispum is simpley dummy text of printing
                </spane>
                <button className="button s-button">Hire me</button>
                <div className="blur s-blur1"
                style={{
                    background: '#ABF1FF94'
                }}></div>
            </div>
        
            {/* right side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Fiver} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                </div>
                {/* background circles */}
                <div className="w-backCircle blueCircle" ></div>
                <div className="w-backCircle yellowCircle" ></div>
            </div>
        </div>
    )
}

export default Works