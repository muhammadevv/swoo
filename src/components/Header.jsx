import { Heart, House, Menu, Search, ShoppingCart, User } from 'lucide-react'
import React from 'react'

function Header() {

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="header-row">
            <div className="header-top_left"></div>
            <div className="header-top_right">
              <div>
                <span>CALL CENTER: +998991234567</span>
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
            <span className='header-katalog_text'>Katalog</span>
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
