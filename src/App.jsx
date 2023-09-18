import {Routes, Route,} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './components/Home'
import Products from'./components/ProductList'
import ProductList from'./components/ProductList'
/* import ProductTest from'./components/ProductTest' */
import ProductListDetail from './components/ProductListDetail'
/* import ProductCategories from './components/ProductCategories' */
import ProductJewelry from './components/ProductJewelry'
import ProductElectronics from './components/ProductElectronics'
import ProductMenClothing from './components/ProductMenClothing'
import ProductWomenClothing from './components/ProductWomenClothing'
import Cart from './components/Cart'
import User from './components/User'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NoMatch from './components/NoMatch'
import './App.css'


function App() {
  const [token, setToken] = useState(localStorage.getItem ("token"));
  const [cart, setCart] = useState([]);
  

  return (  
    <div>
      <Navbar cart = {cart}/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" exact element={<Products setCart = {setCart} token={token}  />} />
      <Route path="/productlist" exact element={<ProductList setCart = {setCart} token={token}  />} />
     {/*  <Route path="/producttest" exact element={<ProductTest token={token}  />} /> */}
      <Route path="/products/:id" exact element={<ProductListDetail token={token}  />} />
     {/*  <Route path="/categories" exact element={<ProductCategories token={token}  />} /> */}
      <Route path="/products/category/jewelery" exact element={<ProductJewelry token={token}  />} />
      <Route path="/products/category/electronics" exact element={<ProductElectronics token={token}  />} />
      <Route path="/products/category/men's clothing" exact element={<ProductMenClothing token={token}  />} />
      <Route path="/products/category/women's clothing" exact element={<ProductWomenClothing token={token}  />} />
      <Route path="/cart" element={<Cart token={token} setToken={setToken} />} />
      <Route path="/user" element={<User token={token} setToken={setToken} />} />
      <Route path="/login" exact element={<Login token={token} setToken={setToken} />} />
      <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;