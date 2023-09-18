import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product_URL = "https://fakestoreapi.com";

export default function ProductCategories() {
  const [productCategories, setProductCategories] = useState([]);

  useEffect(() => {
    async function fetchProductsCategories() {
      try {
        const response = await fetch(`${Product_URL}/products/categories`);
        const data = await response.json();
        console.log('API Response:', data);
        setProductCategories(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductsCategories();
  }, []);

  return (
    <div>
      <h2>Product Categories</h2>
      <ul className="product-category">
        {productCategories.map((category) => (
          <li key={category}>
            <Link to={`/products/category/${category}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
