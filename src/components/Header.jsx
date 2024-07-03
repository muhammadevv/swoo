import { Heart, House, MapPin, Menu, Phone, Search, ShoppingCart, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';

function Header() {

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="header-top_row">
            <div className="header-top_left">
              <div className='header-top_loc'>
                <span><MapPin size={18} strokeWidth={1.5} /></span>
                <span>Город: Ташкент</span>
              </div>
            </div>
            <div className="header-top_right">
              <div className='header-top_order'>
                <Link to='/'>
                  Мои заказы
                </Link>
              </div>
              <div>
                <button className='header-top_lan'>
                  <span>
                    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.5422 15C20.2679 19.0571 16.4776 22 12 22C7.52232 22 3.73203 19.0571 2.45776 15H21.5422Z" fill="#D52B1E"></path>
                      <path d="M21.5422 9H2.45776C3.73203 4.94289 7.52232 2 12 2C16.4776 2 20.2679 4.94289 21.5422 9Z" fill="#F7F9FC"></path>
                      <path d="M21.3704 15.5C21.7775 14.4107 22 13.2313 22 12C22 10.7687 21.7775 9.58934 21.3704 8.5H2.62961C2.22255 9.58934 2 10.7687 2 12C2 13.2313 2.22255 14.4107 2.62961 15.5H21.3704Z" fill="#0039A6"></path>
                    </svg>
                  </span>
                  <span>RU</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <h1>Logo</h1>
          </div>
          <button className='header-katalog'>
            <span><Menu strokeWidth={1.5} /></span>
            <span className='header-katalog_text'>Каталог</span>
          </button>
          <form onSubmit={(e) => handleSearch(e)} className='header-search'>
            <input className='header-search_input' type="search" placeholder='Искать товары и категории' />
            <button className='header-search_button' type='submit'><Search strokeWidth={1.5} /></button>
          </form>
          <div className="header-buttons">
            <button className='header-button'>
              <span>
                <Heart strokeWidth={1.5} />
              </span>
              <span>Избранное</span>
            </button>
            <button className='header-button'>
              <span>
                <ShoppingCart strokeWidth={1.5} />
              </span>
              <span>Корзина</span>
            </button>
            <button className='header-button'>
              <span>
                <User strokeWidth={1.5} />
              </span>
              <span>Вход</span>
            </button>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="header-bottom_row">
            <button className='header-bottom_button'>
              <span><House size={20} strokeWidth={1.5} /></span>
              <span>Главная</span>
            </button>
            <button className='header-bottom_button'>
              <span>
                <Search size={20} strokeWidth={1.5} />
              </span>
              <span>Поиск</span>
            </button>
            <button className='header-bottom_button'>
              <span>
                <ShoppingCart size={20} strokeWidth={1.5} />
              </span>
              <span>Корзина</span>
            </button>
            <button className='header-bottom_button'>
              <span>
                <Heart size={20} strokeWidth={1.5} />
              </span>
              <span>Избранное</span>
            </button>
            <button className='header-bottom_button'>
              <span>
                <User size={20} strokeWidth={1.5} />
              </span>
              <span>Вход</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
