import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';

function Categories() {
  return (
    <section className='categories'>
      <div className="container">
        <div className="categories-row">
          <div className="categories-top">
            <h1 className='categories-top_title'>Популярные категории</h1>
          </div>
          <div className="categories-content">
            <Swiper
              speed={1000}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={20}
              slidesPerView={6}
              modules={[Autoplay]}
            >
              <SwiperSlide className='categories-item'>
                <div className="categories-item_content">
                  <h2 className="categories-item_title">Noutbook</h2>
                  <button className="categories-item_title"></button>
                </div>
                <div className="categories-item_bgImg">
                  <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/head/head_4.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className='categories-item'>
                <div className="categories-item_content">
                  <h2 className="categories-item_title">Noutbook</h2>
                  <button className="categories-item_title"></button>
                </div>
                <div className="categories-item_bgImg">
                  <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/head/head_4.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className='categories-item'>
                <div className="categories-item_content">
                  <h2 className="categories-item_title">Noutbook</h2>
                  <button className="categories-item_title"></button>
                </div>
                <div className="categories-item_bgImg">
                  <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/head/head_4.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className='categories-item'>
                <div className="categories-item_content">
                  <h2 className="categories-item_title">Noutbook</h2>
                  <button className="categories-item_title"></button>
                </div>
                <div className="categories-item_bgImg">
                  <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/head/head_4.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className='categories-item'>
                <div className="categories-item_content">
                  <h2 className="categories-item_title">Noutbook</h2>
                  <button className="categories-item_title"></button>
                </div>
                <div className="categories-item_bgImg">
                  <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/head/head_4.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className='categories-item' >
                <div className="categories-item_content">
                  <h2 className="categories-item_title">Noutbook</h2>
                  <button className="categories-item_title"></button>
                </div>
                <div className="categories-item_bgImg">
                  <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/head/head_4.png" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className='categories-item' >
                <div className="categories-item_content">
                  <h2 className="categories-item_title">Noutbook</h2>
                  <button className="categories-item_title"></button>
                </div>
                <div className="categories-item_bgImg">
                  <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/head/head_4.png" alt="" />
                </div>
              </SwiperSlide>
            </Swiper >
          </div >
        </div >
      </div >
    </section >
  )
}

export default Categories