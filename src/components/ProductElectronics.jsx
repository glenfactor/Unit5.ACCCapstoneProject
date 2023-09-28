import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product_URL = "https://fakestoreapi.com";

export default function ProductElectronics() {
  const [productElectronics, setProductElectronics] = useState([]);

  useEffect(() => {
    async function fetchProductsElectronics() {
      try {
        const response = await fetch(`${Product_URL}/products/category/electronics`);
        const data = await response.json();
        console.log('API Response:', data);
        setProductElectronics(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductsElectronics();
  }, []);

  return (
    <div>
      <div className='productlist-detail-title'>
      <h1>Electronics</h1>
      <div><button className="back-button" onClick={() => window.history.back()}>Go Back</button></div>
      </div>
     
      <ul className='productlist'>
        {productElectronics.map((product) => (
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
