import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product_URL = "https://fakestoreapi.com";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request to the API endpoint
    fetch(`${Product_URL}/products`) // Corrected the URL
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    
    <div>
      
      <h1>Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>Title: {product.title}</strong>
              <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <br />
              {/* <button><Link to={`/products/${product.id}`}>View Product</Link></button> */}
              <button onClick={`/products/${product.id}`}>Take the shot!</button>
            </li>
          ))}
        </ul>
      )}
    </div>

  );
}
