import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import ShoppingCartSimple from '../assets/ShoppingCartSimple.svg';

const Product_URL = "https://fakestoreapi.com";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(200);
  const [sortBy, setSortBy] = useState('none');
  const [cartItemCount, setCartItemCount] = useState(0);
  const [showCartModal, setShowCartModal] = useState(false); // State to control the modal visibility


  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${Product_URL}/products`);
        const data = await response.json();
        console.log('API Response:', data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);


  // Extract the cart-related functions to a separate helper function
  function handleAddToCart(product) {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }
    setCart(updatedCart);
    setCartItemCount(cartItemCount + 1);
  }

  function handleRemoveFromCart(productId) {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  }

  function handleIncreaseQuantity(productId) {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  }

  function handleDecreaseQuantity(productId) {
    const updatedCart = cart.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function calculateTotal() {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total.toFixed(2);
  }

  function selectCategory(e) {
    setSelectedCategory(e.target.value);
  }

  function selectSortBy(e) {
    setSortBy(e.target.value);
  }

  function sortByPrice(ascending) {
    const sortedProducts = [...filteredProducts];
    sortedProducts.sort((a, b) => (ascending ? a.price - b.price : b.price - a.price));
    return sortedProducts;
  }

  let filteredProducts = products;

  if (selectedCategory !== 'all') {
    filteredProducts = products.filter((product) => product.category === selectedCategory);
  }
  filteredProducts = filteredProducts.filter((product) => product.price <= priceRange);

  if (sortBy === 'price-asc') {
    filteredProducts = sortByPrice(true);
  } else if (sortBy === 'price-desc') {
    filteredProducts = sortByPrice(false);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  // Function to open the cart modal
  const openCartModal = () => {
    setShowCartModal(true);
  };

  // Function to close the cart modal
  const closeCartModal = () => {
    setShowCartModal(false);
  };

  return (
    <div>
      <div>
        <h1>Shop for Products</h1>
        <div className="cart-summary">
          {/* Add a button to open the cart modal */}
          <button onClick={openCartModal} className="shoppingCart_btn"><img src={ShoppingCartSimple} alt="Cart" className="shoppingCart_icon" />Your Shopping Cart ( {cart.length} )</button>
        </div>
        {/* Cart Modal */}
        {showCartModal && (
          <div className="cart-summary">
            <div className="cart-summary-content">
              <span className="close-button" onClick={closeCartModal}>
                &times;
              </span>
              <ShoppingCart
                cart={cart}
                removeFromCart={handleRemoveFromCart}
                increaseQuantity={handleIncreaseQuantity}
                decreaseQuantity={handleDecreaseQuantity}
                calculateTotal={calculateTotal}
                cartItemCount={cartItemCount}
              />
            </div>
          </div>
        )}

        <div className='filter-conteiner'>
          <div className="filters">
            <label className="filter-label">Filter by Category:</label>
            <select onChange={selectCategory}>
              <option value="all">All</option>
              <option value="jewelery">Jewelry</option>
              <option value="electronics">Electronics</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
          </div>
          <div className="filters">
            <label className="filter-label">Filter by Price (Max):</label>
            <input
              type="number"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
          </div>
          <div className="filters">
            <label className="filter-label">Sort by:</label>
            <select onChange={selectSortBy}>
              <option value="none">None</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
      <ul className='productlist'>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <span>Price</span>
            <p className="price-tag">${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <Link to={`/products/${product.id}`}>
              <button>View Product</button>
            </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}