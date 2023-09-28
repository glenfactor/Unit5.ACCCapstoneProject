import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';
import Cart from './components/Cart';
import User from './components/User';
import Login from './components/Login';
import ShopCart from './components/ShopCart';

import Products from './components/ProductList';
import ProductList from './components/ProductList';
import ProductListDetail from './components/ProductListDetail';
import ShoppingCart from './components/ShoppingCart';

import ProductJewelry from './components/ProductJewelry';
import ProductElectronics from './components/ProductElectronics';
import ProductMenClothing from './components/ProductMenClothing';
import ProductWomenClothing from './components/ProductWomenClothing';


const App = () => {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));
  {/* Render the ShoppingCart component and pass functions and cart as props */ }



  // Define the removeFromCart and calculateTotal functions
  const removeFromCart = (productId) => {
    // Find the index of the product in the cart
    const productIndex = cart.findIndex((item) => item.id === productId);

    // If the product is found in the cart, remove it
    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(productIndex, 1);
      setCart(updatedCart);
    }
  };
  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total.toFixed(2); // Ensure the total is formatted with 2 decimal places
  };


  const clearCart = () => {
    setCart([]); // Clear the cart by setting it to an empty array
  };

  // Function to handle checkout logic (e.g., redirect to a checkout page)
  const handleCheckout = () => {
    // Implement your checkout logic here, e.g., redirect to a checkout page
  };


  return (
    <div>
      <Navbar cart={cart} setCart={setCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products setCart={setCart} token={token} cart={cart} />} />
        <Route path="/productlist" element={<ProductList setCart={setCart} cart={cart} />} />
        <Route path="/products/:id" element={<ProductListDetail setCart={setCart} cart={cart} />} />
        <Route path="/products/category/jewelery" element={<ProductJewelry setCart={setCart} cart={cart} />} />
        <Route path="/products/category/electronics" element={<ProductElectronics setCart={setCart} cart={cart} />} />
        <Route path="/products/category/men's clothing" element={<ProductMenClothing setCart={setCart} cart={cart} />} />
        <Route path="/products/category/women's clothing" element={<ProductWomenClothing setCart={setCart} cart={cart} />} />
        <Route path="/shoppingcart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} calculateTotal={calculateTotal} />} />
        <Route path="/shopcart" element={<ShopCart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
