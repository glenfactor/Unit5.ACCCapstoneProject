import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product_URL = "https://fakestoreapi.com";

function ProductList() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    // Fetch products from the third-party API
    fetch(`${Product_URL}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    
    <div>
      
      <h1>Product List</h1>
 
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} style={{ width: '100px' }} />
              <strong>Title: {product.title}</strong>
              <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <br />
              <Link to={`/products/${product.id}`}>ClickME</Link>

            </li>
          ))}
        </ul>
    
    </div>

  );
}

export default ProductList;
