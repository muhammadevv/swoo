import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Heart, ShoppingBag } from 'lucide-react';

function Brands() {
  return (
    <section className='brands'>
      <div className="container">
        <div className="brands-row">
          <div className="brands-top">
            <h1 className='brands-top_title'>Популярные бренды</h1>
          </div>

          <Swiper
            // navigation={true}
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
            speed={1500}
            slidesPerView={2}
            slidesPerGroup={1}
            spaceBetween={24}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
              },
              860: {
                slidesPerView: 4,
              },
              990: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            className="brands-content">

            <SwiperSlide className='brands-box'>
              <div className="brands-box_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className="brands-box_content">
                <h3 className="brands-box_title">Yingbao Rubber</h3>
                <p className='brands-box_subtitle'>Lorem ipsum dolor sit amet.</p>
                <button className='brands-box_button'>Add</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='brands-box'>
              <div className="brands-box_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className="brands-box_content">
                <h3 className="brands-box_title">Yingbao Rubber</h3>
                <p className='brands-box_subtitle'>Lorem ipsum dolor sit amet.</p>
                <button className='brands-box_button'>Add</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='brands-box'>
              <div className="brands-box_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className="brands-box_content">
                <h3 className="brands-box_title">Yingbao Rubber</h3>
                <p className='brands-box_subtitle'>Lorem ipsum dolor sit amet.</p>
                <button className='brands-box_button'>Add</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='brands-box'>
              <div className="brands-box_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className="brands-box_content">
                <h3 className="brands-box_title">Yingbao Rubber</h3>
                <p className='brands-box_subtitle'>Lorem ipsum dolor sit amet.</p>
                <button className='brands-box_button'>Add</button>
              </div>
            </SwiperSlide>



            <div className='brands-buttons'>
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-next"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Brands