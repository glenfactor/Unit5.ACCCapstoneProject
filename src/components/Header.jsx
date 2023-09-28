import CreditCard from '../assets/CreditCard.svg';
import Trophy from '../assets/Trophy.svg';
import Package from '../assets/Package.svg';
import Headphones from '../assets/Headphones.svg';
import ShoppingCartSimple from '../assets/ShoppingCartSimple.svg';

export default function Header() {
    return (
        <>
            <div className="slide-feature">
                <div className="big-img">
                    <img
                        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                        alt="Premium Slim Fit T-Shirts"
                        className="big-img-img"
                    />
                    <div className="big-img-txt">
                        <h1>Featured Product</h1>
                        <h4>Premium Slim Fit T-Shirts </h4>
                        <p>Starting at $22.30</p>
                        <button className="shoppingCart_btn">Shop Now<img src={ShoppingCartSimple} alt="Cart" className="shoppingCart_icons" /></button>
                    </div>
                </div>
                <div className="slide-feature-sm">
                    <div className="small-img-top">
                        <img
                            src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
                            alt="Petite Micropave"
                            className="small-img-top-txt-img"
                        />
                        <div className="small-img-top-txt">
                        <h4>Solid Gold Petite Micropave </h4>
                        <p>Starting at $168.00</p>
                        <button className="shoppingCart_btn">Shop Now<img src={ShoppingCartSimple} alt="Cart" className="shoppingCart_icons" /></button>
                        </div>
                    </div>
                    <div className="small-img-bottom">
                        <img
                            src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
                            alt="Silicon Power 256GB"
                            className="small-img-bottom-txt-img"
                        />
                        <div className="small-img-bottom-txt">
                        <h4>Silicon Power 256GB</h4>
                        <p>Starting at $109.00</p>
                        <button className="shoppingCart_btn">Shop Now<img src={ShoppingCartSimple} alt="Cart" className="shoppingCart_icons" /></button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="slide-features">

                <div>
                    <div className="header_icons"><img src={Package} alt="" /></div>
                    <div className="text-container">
                        <h3>Faster Delivery</h3>
                        <p>Delivery in 24 Hours</p>
                    </div>
                </div>
                <div>
                    <div className="header_icons"><img src={Trophy} alt="" /></div>
                    <div className="text-container">
                        <h3>24 Hours Return</h3>
                        <p>100% money-back guarantee</p>
                    </div>
                </div>
                <div>
                    <div className="header_icons"><img src={CreditCard} alt="" /></div>
                    <div className="text-container">
                        <h3>Secure Payment</h3>
                        <p>Your money is Safe with us</p>
                    </div>
                </div>
                <div>
                    <div className="header_icons"><img src={Headphones} alt="" /></div>
                    <div className="text-container">
                        <h3>Support 24/7</h3>
                        <p>Live contact</p>
                    </div>
                </div>
            </div>
        </>
    )
}