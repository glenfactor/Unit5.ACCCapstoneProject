import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



// Define a context or global state to manage the shopping cart here

const Product_URL = "https://fakestoreapi.com";

export default function ProductMensClothing() {
  const [productMensClothing, setProductMensClothing] = useState([]);
  

  useEffect(() => {
    async function fetchProductsMensClothing() {
      try {
        const response = await fetch(`${Product_URL}/products/category/men's clothing`);
        const data = await response.json();
        console.log('API Response:', data);
        setProductMensClothing(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductsMensClothing();
  }, []);

  // Function to handle adding a product to the cart
  function addToCart(product) {
    // Assuming your cart state has an "addItem" function
    cartContext.addItem(product);
  }

  return (
    <div>
      <div className='productlist-detail-title'>
        <h1>Men's Clothing</h1>
        <div>
          <button className="back-button" onClick={() => window.history.back()}>Go Back</button>
        </div>
      </div>
      
      <ul className='productlist'>
        {productMensClothing.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} style={{}} />
            <h3>{product.title}</h3>
            <span>Price</span>
            <p className="price-tag">${product.price}</p>
 
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
