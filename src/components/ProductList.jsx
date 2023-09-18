import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import ProductCategories from "./ProductCategories";

const Product_URL = "https://fakestoreapi.com";

export default function ProductList({}) {
  const [products, setProducts] = useState([]);

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

  return (
    <div>
      {/* <ProductCategories /> */}
     
      <div><h1>Shop for Products</h1></div>
      
      <ul className='productlist'>
        {products.map((product) => (
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
