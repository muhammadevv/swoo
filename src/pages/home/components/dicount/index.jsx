import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Heart, ShoppingBag } from 'lucide-react';

function Discout() {
  return (
    <section className='discount'>
      <div className="container">
        <div className="discount-row">
          <div className="discount-top">
            <h1 className='discount-top_title'>Discount</h1>
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
                slidesPerView: 4,
              },
              1100: {
                slidesPerView: 6,
              },
            }}
            loop={true}
            modules={[Navigation, Pagination,]}
            className="discount-content">

            <SwiperSlide className='discount-card'>
              <div className="discount-card_fav">
                <button className="discount-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="discount-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                {/* <span className='product-info_new'>NEW</span> */}
                {/* <span className='product-info_best'>BEST SELLER</span> */}
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="discount-card_content">
                <h3 className="discount-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='discount-card_row'>
                  <div className='discount-card_col'>
                    <p className="discount-card_price">12 000 сум</p>
                    {/* <p className='discount-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='discount-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='discount-card'>
              <div className="discount-card_fav">
                <button className="discount-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="discount-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                {/* <span className='product-info_new'>NEW</span> */}
                {/* <span className='product-info_best'>BEST SELLER</span> */}
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="discount-card_content">
                <h3 className="discount-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='discount-card_row'>
                  <div className='discount-card_col'>
                    <p className="discount-card_price">12 000 сум</p>
                    {/* <p className='discount-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='discount-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='discount-card'>
              <div className="discount-card_fav">
                <button className="discount-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="discount-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                {/* <span className='product-info_new'>NEW</span> */}
                {/* <span className='product-info_best'>BEST SELLER</span> */}
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="discount-card_content">
                <h3 className="discount-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='discount-card_row'>
                  <div className='discount-card_col'>
                    <p className="discount-card_price">12 000 сум</p>
                    {/* <p className='discount-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='discount-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='discount-card'>
              <div className="discount-card_fav">
                <button className="discount-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="discount-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                {/* <span className='product-info_new'>NEW</span> */}
                {/* <span className='product-info_best'>BEST SELLER</span> */}
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="discount-card_content">
                <h3 className="discount-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='discount-card_row'>
                  <div className='discount-card_col'>
                    <p className="discount-card_price">12 000 сум</p>
                    {/* <p className='discount-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='discount-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='discount-card'>
              <div className="discount-card_fav">
                <button className="discount-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="discount-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                {/* <span className='product-info_new'>NEW</span> */}
                {/* <span className='product-info_best'>BEST SELLER</span> */}
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="discount-card_content">
                <h3 className="discount-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='discount-card_row'>
                  <div className='discount-card_col'>
                    <p className="discount-card_price">12 000 сум</p>
                    {/* <p className='discount-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='discount-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='discount-card'>
              <div className="discount-card_fav">
                <button className="discount-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="discount-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                {/* <span className='product-info_new'>NEW</span> */}
                {/* <span className='product-info_best'>BEST SELLER</span> */}
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="discount-card_content">
                <h3 className="discount-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='discount-card_row'>
                  <div className='discount-card_col'>
                    <p className="discount-card_price">12 000 сум</p>
                    {/* <p className='discount-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='discount-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='discount-card'>
              <div className="discount-card_fav">
                <button className="discount-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="discount-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                {/* <span className='product-info_new'>NEW</span> */}
                {/* <span className='product-info_best'>BEST SELLER</span> */}
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="discount-card_content">
                <h3 className="discount-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='discount-card_row'>
                  <div className='discount-card_col'>
                    <p className="discount-card_price">12 000 сум</p>
                    <p className='discount-card_oldPrice'> 12 000 сум  </p>
                  </div>
                  <button className='discount-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>



            <div className='discount-buttons'>
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

export default Discout