import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

function BestSeller() {
  return (
    <section className='bests'>
      <div className="container">
        <div className="bests-row">
          <div className="bests-top">
            <h1 className='bests-top_title'>Бестселлер</h1>
          </div>

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
            slidesPerView={2}
            slidesPerGroup={1}
            spaceBetween={20}
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
                slidesPerView: 6,
              },
            }}
            loop={true}
            modules={[Navigation, Pagination,]}
            className="bests-content">
            <SwiperSlide className='bests-item'>
              <div className="bests-item_img"></div>
              <div className='bests-item_'>

              </div>
              <div className="bests-item_content">
                <h3 className="bests-item_title">Игровая механическая клавиатура Yingbao Rubber mk60 RGB подсветкой</h3>
                <p className="bests-item_price">
                  12 000 сум  <span className='bests-item_oldPrice'> 12 000 сум  </span>
                </p>
                <div className="bests-item_title">
                  <input type="range" min={0} value={2} max={89} />
                </div>
              </div>
              <div className='bests-item_cart'>
                <button></button>
              </div>
            </SwiperSlide>
            <SwiperSlide className='bests-product'>Slide 2</SwiperSlide>
            <SwiperSlide className='bests-product'>Slide 3</SwiperSlide>
            <SwiperSlide className='bests-product'>Slide 4</SwiperSlide>
            <SwiperSlide className='bests-product'>Slide 5</SwiperSlide>
            <SwiperSlide className='bests-product'>Slide 5</SwiperSlide>
            <SwiperSlide className='bests-product'>Slide 5</SwiperSlide>
            <SwiperSlide className='bests-product'>Slide 5</SwiperSlide>
            <div className='swiper-buttons'>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-next"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default BestSeller