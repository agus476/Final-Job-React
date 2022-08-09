import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import  "./AboutUs.scss"
import { Parallax, Pagination, Navigation } from "swiper";

export  function AboutUs() {

  return (
    <>
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      speed={1000}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      <div
        slot="container-start"
        className="parallax-bg"
        style={{
          "backgroundImage":
            "url(https://www.bonkers-shop.com/wp-content/uploads/palace-skateboards-1440-480.jpg)",
        }}
        data-swiper-parallax="-23%"
      ></div>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
          Who we are
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
         Location
        </div> 
        <div className="text" data-swiper-parallax="-100">
          <p>
          We are Palace Skateboards Limited, a company registered in England and Wales with company number 08253929. Our registered address is 4th Floor, 100 St John Street, London EC1M 4EH. Our registered VAT number is GB 164129025.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
          About Us
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          Description
        </div>
        <div className="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="title" data-swiper-parallax="-300">
          Slide 3
        </div>
        <div className="subtitle" data-swiper-parallax="-200">
          Subtitle
        </div>
        <div className="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
            ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
            tincidunt ut libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
  )
}
