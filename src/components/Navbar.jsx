import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import { NavLink } from 'react-router-dom';
import FakeLogoFin from '../assets/FakeLogoFin.svg';
import ShoppingCartSimple from '../assets/ShoppingCartSimple.svg';
import User from '../assets/User.svg';
import Heart from '../assets/Heart.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
import pinterest from '../assets/pinterest.svg';
import search from '../assets/search.svg';


function Navbar({ cart }) {
  const [searchQuery, setSearchQuery] = useState('');

  // TODO show different links based on whether the user is logged in or not
  return (
    <>
      <div className="topbar">
        <p>Welcome to FakeShopUI online eCommerce store </p>

        <p>
          <Link to="/shoppingcart"><img src={ShoppingCartSimple} alt="Cart" className="shoppingCart_icons" /></Link>
          <Link><img src={User} alt="User" className="shoppingCart_icons" /> </Link>
          <Link><img src={Heart} alt="Wishlist" className="shoppingCart_icons" /> </Link>
        </p>
      </div>
      <nav className="navbar">
        <div><a href="/"><img src={FakeLogoFin} alt="logo" className='logo' /></a></div>
        <p>Follow us on
          <img src={facebook} alt="facebook" className="socialMedia_icons" />
          <img src={instagram} alt="instagram" className="socialMedia_icons" />
          <img src={twitter} alt="twitter" className="socialMedia_icons" />
          <img src={youtube} alt="youtube" className="socialMedia_icons" />
          <img src={pinterest} alt="pinterest" className="socialMedia_icons" />
        </p>

      </nav>
      <div>
        <ul className="nav-links">

          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/products">PRODUCTS</NavLink></li>
          <li><NavLink to="/products/category/jewelery">JEWELRY</NavLink></li>
          <li><NavLink to="/products/category/electronics">ELECTRONICS</NavLink></li>
          <li><NavLink to="/products/category/men's clothing">MEN'S CLOTHING</NavLink></li>
          <li><NavLink to="/products/category/women's clothing">WOMEN'S CLOTHING</NavLink></li>
          {/* <li><NavLink to="/shoppingcart">CART</NavLink></li> */}
          {/* <li><NavLink to="/shopcart">SHOPCART</NavLink></li> */}
          {/* <li><NavLink to="/user">USER</NavLink></li> */}
          <li><NavLink to="/login">LOGIN</NavLink></li>
          <div className='search-bar-container'>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-bar"
            />
            <button className="searchbutton"><img src={search} alt="search" /></button>
          </div>

        </ul>

      </div>
    </>
  );
}
export default Navbar;
