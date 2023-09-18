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

function Navbar( {}) {
    // TODO show different links based on whether the user is logged in or not
  return (
    <>
    <div className="topbar">
      <p>Welcome to FakeShopUI online eCommerce store </p>
      <p>
      <img src={ShoppingCartSimple} alt="Cart" className = "shoppingCart_icons"/>
      <img src={User} alt="User" className = "shoppingCart_icons"/>
      <img src={Heart} alt="Wishlist" className = "shoppingCart_icons"/>
      </p> 
    </div>
    <nav className="navbar">
    <div><a href="/"><img src={FakeLogoFin} alt="logo" className='logo'/></a></div>
    <p>Follow us on 
    <img src={facebook} alt="facebook" className = "socialMedia_icons"/>
    <img src={instagram} alt="instagram" className = "socialMedia_icons"/>
    <img src={twitter} alt="twitter" className = "socialMedia_icons"/>
    <img src={youtube} alt="youtube" className = "socialMedia_icons"/>
    <img src={pinterest} alt="pinterest" className = "socialMedia_icons"/>
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
        <li><NavLink to="/cart">CART</NavLink></li>
        <li><NavLink to="/user">USER</NavLink></li>
        <li><NavLink to="/login">LOGIN</NavLink></li>
      </ul>
     {/*  <span>Cart {cart.length}</span> */}
      </div>
    </>
  );
}
export default Navbar;
