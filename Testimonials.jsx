import react from "react";
import './Testimonials.css'
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from "swiper";
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonials = () =>{

    const clients=[
        {
            img: profilePic1,
            review:
            "Excellent attention to detail and great communication throughout the project. The website looks fantastic and functions flawlessly."
        },
        {
            img: profilePic2,
            review:
            "A true expert in their field, [Backend Developer] was able to troubleshoot and solve complex issues quickly and efficiently."
        },
        {
            img: profilePic3,
            review:
            "Professional, knowledgeable, and always willing to go the extra mile. Highly recommend [Backend Developer] for anyone in need of a top-notch backend developer."
        },
        {
            img: profilePic4,
            review:
            "Impressive ability to balance aesthetics with functionality. Highly recommended for anyone in need of a top-notch designer."
        },
    ]


    return(
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional work </span>
                <span>from me...</span>
                <div className="blur t-blur1"
                 style={{background: "var(--purple)"}}></div>
                <div className="blur t-blur2" 
                style={{background: "skyblue"}}></div>
            </div>
            {/* slider */}
            <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            >
                {clients.map((client, index) =>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}

export default Testimonials