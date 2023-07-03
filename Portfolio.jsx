import React from "react";
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SearchByName from '../../img/searchbyname.png';
import SearchByIngredient from '../../img/searchByIngredeint.png';
import SearchByLetter from '../../img/searchByLetter.png';
import Home from '../../img/home.png';
import 'swiper/css';

const Portfolio = () =>{
    return(
        <div className="portfolio" id="Portfolio">
            {/* heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>
            {/* slider */}
            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
            
                <SwiperSlide>
                    <img src={SearchByName} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SearchByIngredient} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SearchByLetter} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Home} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Portfolio