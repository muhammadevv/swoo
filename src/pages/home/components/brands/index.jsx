import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
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
            spaceBetween={30}
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
            modules={[Navigation, Pagination,]}
            className="brands-content">

            <SwiperSlide className='brands-card'>
              <div className="brands-card_fav">
                <button className="brands-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="brands-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                {/* <span className='product-info_new'>NEW</span> */}
                {/* <span className='product-info_best'>BEST SELLER</span> */}
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="brands-card_content">
                <h3 className="brands-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='brands-card_row'>
                  <div className='brands-card_col'>
                    <p className="brands-card_price">12 000 сум</p>
                    {/* <p className='brands-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='brands-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='brands-card'>
              <div className="brands-card_fav">
                <button className="brands-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="brands-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                {/* <span className='product-info_new'>NEW</span> */}
                {/* <span className='product-info_best'>BEST SELLER</span> */}
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="brands-card_content">
                <h3 className="brands-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='brands-card_row'>
                  <div className='brands-card_col'>
                    <p className="brands-card_price">12 000 сум</p>
                    {/* <p className='brands-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='brands-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='brands-card'>
              <div className="brands-card_fav">
                <button className="brands-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="brands-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                {/* <span className='product-info_new'>NEW</span> */}
                {/* <span className='product-info_best'>BEST SELLER</span> */}
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="brands-card_content">
                <h3 className="brands-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='brands-card_row'>
                  <div className='brands-card_col'>
                    <p className="brands-card_price">12 000 сум</p>
                    {/* <p className='brands-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='brands-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='brands-card'>
              <div className="brands-card_fav">
                <button className="brands-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="brands-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                {/* <span className='product-info_new'>NEW</span> */}
                {/* <span className='product-info_best'>BEST SELLER</span> */}
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="brands-card_content">
                <h3 className="brands-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='brands-card_row'>
                  <div className='brands-card_col'>
                    <p className="brands-card_price">12 000 сум</p>
                    {/* <p className='brands-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='brands-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='brands-card'>
              <div className="brands-card_fav">
                <button className="brands-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="brands-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                {/* <span className='product-info_new'>NEW</span> */}
                {/* <span className='product-info_best'>BEST SELLER</span> */}
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="brands-card_content">
                <h3 className="brands-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='brands-card_row'>
                  <div className='brands-card_col'>
                    <p className="brands-card_price">12 000 сум</p>
                    {/* <p className='brands-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='brands-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='brands-card'>
              <div className="brands-card_fav">
                <button className="brands-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="brands-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                {/* <span className='product-info_new'>NEW</span> */}
                {/* <span className='product-info_best'>BEST SELLER</span> */}
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="brands-card_content">
                <h3 className="brands-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='brands-card_row'>
                  <div className='brands-card_col'>
                    <p className="brands-card_price">12 000 сум</p>
                    {/* <p className='brands-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='brands-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='brands-card'>
              <div className="brands-card_fav">
                <button className="brands-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="brands-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                {/* <span className='product-info_new'>NEW</span> */}
                {/* <span className='product-info_best'>BEST SELLER</span> */}
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="brands-card_content">
                <h3 className="brands-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='brands-card_row'>
                  <div className='brands-card_col'>
                    <p className="brands-card_price">12 000 сум</p>
                    <p className='brands-card_oldPrice'> 12 000 сум  </p>
                  </div>
                  <button className='brands-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
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