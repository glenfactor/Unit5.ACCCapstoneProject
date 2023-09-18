
import FakeLogoFin from '../assets/FakeLogoFin.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
import pinterest from '../assets/pinterest.svg';

export default function Footer() {
  return (
    <>
    <div className="mainfooter">
    <div className="footer-col-1">
    <a href="/"><img src={FakeLogoFin} alt="logo" className='footerlogo'/></a>
    <h2>Welcome to FakeShopUI online eCommerce store </h2>
    <p>Follow us on 
    <img src={facebook} alt="facebook" className = "socialMedia_icons"/>
    <img src={instagram} alt="instagram" className = "socialMedia_icons"/>
    <img src={twitter} alt="twitter" className = "socialMedia_icons"/>
    <img src={youtube} alt="youtube" className = "socialMedia_icons"/>
    <img src={pinterest} alt="pinterest" className = "socialMedia_icons"/>
    </p>
  
    </div>
    <div className="footer-col-2">
    <h3>Products</h3>
      <ul>
        <li><a href="/products/category/electronics">Electronics</a></li>
        <li><a href="/products/category/jewelery">Jewelry</a></li>
        <li><a href="/products/category/men's clothing">Men's Clothing</a></li>
        <li><a href="/products/category/women's clothing">Women's Clothing</a></li>
      </ul>
      </div>
      <div className="footer-col-2">
      <h3>Support</h3>
      <ul>
        <li><a href="/">Account</a></li>
        <li><a href="/">Support Center</a></li>
        <li><a href="/">FAQ</a></li>
        <li><a href="/">Accessibility</a></li>
      </ul>
      </div>
      <div className="footer-col-2">
      <h3>Menu</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/user">User</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      </div>
      </div>
      <div className="subfooter">
      <p className="read-the-docs">ACC Capstone Project by: Glen Factor.</p>
      <p> © 2023. Fullstack Academy . All Rights Reserved.</p>
      </div>
      </>
  );
}
