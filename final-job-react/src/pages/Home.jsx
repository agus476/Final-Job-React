import React from 'react'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import Slider1 from "../assets/sliderhome1.png"
import Slider2 from "../assets/sliderhome2.jpg"
import Slider3 from "../assets/sliderhome3.png"




const Home = ( ) => {
  return (
    <>
    
    <div className='swipperContainer'>

    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Slider1} alt="" className='slider1' /></SwiperSlide>
        <SwiperSlide><img src={Slider2} alt="" className='slider2'/></SwiperSlide>
        <SwiperSlide><img src={Slider3} alt="" className='slider3'/></SwiperSlide>
      </Swiper>

    </div>
    
       
      <h1 className='homeTitle'>SS23 HIGHLIGHTS</h1>
     <ItemListContainer categoryParam=''/>

    </>
  
  )
}


export default Home