import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <div>
      <div className='productlist-detail-title'>
      <h1>Men's Clothing</h1>
      <div><button className="back-button" onClick={() => window.history.back()}>Go Back</button></div>
      </div>
      
      <ul className='productlist'>
        {productMensClothing.map((product) => (
          <li key={product.id}>
          <img src={product.image} alt={product.title} style={{ }} />
          {/* <span>Title</span> */}
          <h3>{product.title}</h3>
          <span >Price</span>
          <p className="price-tag">${product.price}</p>
 
          {/* <span>Description</span>
          <p>{product.description}</p>
          
          <span>Category</span>
          <p>{product.category}</p> */}
         
          {/* Use Link to navigate to the ProductDetail page with the product ID */}
          <Link to={`/products/${product.id}`}>
          <button>Add to Cart</button>
          </Link>
          <Link to={`/products/${product.id}`}>
          <button>View Product</button>
          </Link>
          
        </li>
        ))}
      </ul>
    </div>
  );
}
