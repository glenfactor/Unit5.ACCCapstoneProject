import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product_URL = "https://fakestoreapi.com";

const ProductCategory = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products for the specified category
    async function fetchProductsByCategory() {
      try {
        const response = await fetch(`${Product_URL}/products/category/${categoryName}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProductsByCategory();
  }, [categoryName]);

  return (
    <div>
      <h1>Products in Category: { categoryName }</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategory;
