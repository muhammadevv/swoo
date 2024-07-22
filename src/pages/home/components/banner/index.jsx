import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


function Banner() {
  return (
    <section className='banner'>
      <div className="container">
        <div className="banner-row">
          <div className="banner-top">
            <Swiper
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              speed={1000}
              spaceBetween={20}
              loop={true}
              modules={[Autoplay, Navigation, Pagination,]}
              className="banner-top_left"
            >
              <SwiperSlide className='banner-top_left_slide'>
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/head/head_1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide className='banner-top_left_slide'>Slide 2</SwiperSlide>

              <div className='banner-top_left_swiper_buttons'>
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
              </div>
            </Swiper>
            <div className='banner-top_right'></div>
          </div>
          <div className="banner-bottom">
            <div className="banner-bottom_left"></div>
            <div className="banner-bottom_center"></div>
            <div className="banner-bottom_right"></div>
          </div>
        </div>
        
      </div>
    </section >
  )
}

export default Banner