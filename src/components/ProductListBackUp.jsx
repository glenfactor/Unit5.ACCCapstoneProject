import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product_URL = "https://fakestoreapi.com";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(200); // Set a default maximum price range
  const [sortBy, setSortBy] = useState('none'); // Default sort option

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

  function addToCart(product) {
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product exists, increase its quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product doesn't exist, add it to the cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(productId) {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  }

  function increaseQuantity(productId) {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  }

  function decreaseQuantity(productId) {
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
    sortedProducts.sort((a, b) => {
      if (!ascending) {
        return b.price - a.price;
      }
      return a.price - b.price;
    });
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

  return (
    <div>
      <div>
        <h1>Shop for Products</h1>
        {/* Shopping Cart Block */}
        <div className="cart-summary">
          <h2>Shopping Cart</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td>{cartItem.title}</td>
                  <td>${cartItem.price.toFixed(2)}</td>
                  <td>
                    <button onClick={() => decreaseQuantity(cartItem.id)}>-</button>
                    {cartItem.quantity}
                    <button onClick={() => increaseQuantity(cartItem.id)}>+</button>
                  </td>
                  <td>
                    <button onClick={() => removeFromCart(cartItem.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total">
            Total: ${calculateTotal()}
          </div>
          <Link to="/shoppingcart">
            <button>Go to Cart</button>
          </Link>
        </div>
        <div className='filter-conteiner'>
          {/* Filter by Category */}
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
          {/* Filter by Price */}
          <div className="filters">
            <label className="filter-label">Filter by Price (Max):</label>
            <input
              type="number"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
          </div>
          {/* Filter by Sort */}
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
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/products/${product.id}`}>
              <button>View Product</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
