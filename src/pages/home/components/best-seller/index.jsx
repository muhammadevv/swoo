import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Heart, ShoppingBag } from 'lucide-react';

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
                slidesPerView: 4,
              },
              1100: {
                slidesPerView: 6,
              },
            }}
            loop={true}
            modules={[Navigation, Pagination,]}
            className="bests-content">

            <SwiperSlide className='bests-card'>
              <div className="bests-card_fav">
                <button className="bests-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="bests-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                <span className='product-info_new'>NEW</span>
                <span className='product-info_best'>BEST SELLER</span>
                <span className='product-info_top'>TOP RATED</span>
              </div>
              <div className="bests-card_content">
                <h3 className="bests-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='bests-card_row'>
                  <div className='bests-card_col'>
                    <p className="bests-card_price">12 000 сум</p>
                    {/* <p className='bests-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='bests-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='bests-card'>
              <div className="bests-card_fav">
                <button className="bests-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="bests-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                {/* <span className='product-info_dis'>10% OFF</span> */}
                {/* <span className='product-info_new'>NEW</span> */}
                <span className='product-info_best'>BEST SELLER</span>
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="bests-card_content">
                <h3 className="bests-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='bests-card_row'>
                  <div className='bests-card_col'>
                    <p className="bests-card_price">12 000 сум</p>
                    {/* <p className='bests-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='bests-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='bests-card'>
              <div className="bests-card_fav">
                <button className="bests-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="bests-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                {/* <span className='product-info_dis'>10% OFF</span> */}
                {/* <span className='product-info_new'>NEW</span> */}
                <span className='product-info_best'>BEST SELLER</span>
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="bests-card_content">
                <h3 className="bests-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='bests-card_row'>
                  <div className='bests-card_col'>
                    <p className="bests-card_price">12 000 сум</p>
                    {/* <p className='bests-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='bests-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='bests-card'>
              <div className="bests-card_fav">
                <button className="bests-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="bests-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                {/* <span className='product-info_dis'>10% OFF</span> */}
                {/* <span className='product-info_new'>NEW</span> */}
                <span className='product-info_best'>BEST SELLER</span>
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="bests-card_content">
                <h3 className="bests-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='bests-card_row'>
                  <div className='bests-card_col'>
                    <p className="bests-card_price">12 000 сум</p>
                    {/* <p className='bests-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='bests-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='bests-card'>
              <div className="bests-card_fav">
                <button className="bests-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="bests-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                {/* <span className='product-info_dis'>10% OFF</span> */}
                {/* <span className='product-info_new'>NEW</span> */}
                <span className='product-info_best'>BEST SELLER</span>
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="bests-card_content">
                <h3 className="bests-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='bests-card_row'>
                  <div className='bests-card_col'>
                    <p className="bests-card_price">12 000 сум</p>
                    {/* <p className='bests-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='bests-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='bests-card'>
              <div className="bests-card_fav">
                <button className="bests-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="bests-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                {/* <span className='product-info_dis'>10% OFF</span> */}
                {/* <span className='product-info_new'>NEW</span> */}
                <span className='product-info_best'>BEST SELLER</span>
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="bests-card_content">
                <h3 className="bests-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='bests-card_row'>
                  <div className='bests-card_col'>
                    <p className="bests-card_price">12 000 сум</p>
                    {/* <p className='bests-card_oldPrice'> 12 000 сум  </p> */}
                  </div>
                  <button className='bests-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='bests-card'>
              <div className="bests-card_fav">
                <button className="bests-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="bests-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                {/* <span className='product-info_dis'>10% OFF</span> */}
                {/* <span className='product-info_new'>NEW</span> */}
                <span className='product-info_best'>BEST SELLER</span>
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="bests-card_content">
                <h3 className="bests-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='bests-card_row'>
                  <div className='bests-card_col'>
                    <p className="bests-card_price">12 000 сум</p>
                    <p className='bests-card_oldPrice'> 12 000 сум  </p>
                  </div>
                  <button className='bests-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='bests-card'>
              <div className="bests-card_fav">
                <button className="bests-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="bests-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                {/* <span className='product-info_dis'>10% OFF</span> */}
                {/* <span className='product-info_new'>NEW</span> */}
                <span className='product-info_best'>BEST SELLER</span>
                {/* <span className='product-info_top'>TOP RATED</span> */}
              </div>
              <div className="bests-card_content">
                <h3 className="bests-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='bests-card_row'>
                  <div className='bests-card_col'>
                    <p className="bests-card_price">12 000 сум</p>
                    <p className='bests-card_oldPrice'> 12 000 сум  </p>
                  </div>
                  <button className='bests-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
            {/* <div className='bests-card'>
              <div className="bests-card_fav">
                <button className="bests-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="bests-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                <span className='product-info_new'>NEW</span>
                <span className='product-info_best'>BEST SELLER</span>
                <span className='product-info_top'>TOP RATED</span>
              </div>
              <div className="bests-card_content">
                <h3 className="bests-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='bests-card_row'>
                  <div className='bests-card_col'>
                    <p className="bests-card_price">12 000 сум</p>
                    <p className='bests-card_oldPrice'> 12 000 сум  </p>
                  </div>
                  <button className='bests-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
            <SwiperSlide className='bests-card'>
              <div className="bests-card_fav">
                <button className="bests-card_fav_btn">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="bests-card_img">
                <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/prod4.png" alt="" />
              </div>
              <div className='product-info'>
                <span className='product-info_dis'>10% OFF</span>
                <span className='product-info_new'>NEW</span>
                <span className='product-info_best'>BEST SELLER</span>
                <span className='product-info_top'>TOP RATED</span>
              </div>
              <div className="bests-card_content">
                <h3 className="bests-card_title">Игровая механическая клавиатура Yingbao Rubber</h3>
                <div className='bests-card_row'>
                  <div className='bests-card_col'>
                    <p className="bests-card_price">12 000 сум</p>
                    <p className='bests-card_oldPrice'> 12 000 сум  </p>
                  </div>
                  <button className='bests-card_button'>
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </SwiperSlide> */}


            <div className='bests-buttons'>
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
              <div className="swiper-button-next"></div>
            </div>
          </Swiper>
        </div>
        <div className="bests-banner">
          <div className='bests-banner_content'>
            <h3 className='bests-banner_title'>Title</h3>
            <p className='bests-banner_subtitle'>Subtitle</p>
            <button className='bests-banner_button'>Read more</button>
          </div>
          <div className='bests-banner_img'>
            <img src="https://ui-themez.smartinnovates.net/items/swoo_html/home_electronic/assets/img/products/banner.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSeller