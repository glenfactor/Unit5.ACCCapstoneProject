import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Product_URL = "https://fakestoreapi.com";

export default function ProductCategories({ setCategories }) {
  const [productCategories, setProductCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    async function fetchProductsCategory() {
      try {
        const response = await fetch(`${Product_URL}/products/categories`);
        const data = await response.json();
        console.log('API Response:', data);
        setProductCategories(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductsCategory();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <label>Select a Category:</label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {productCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <p>Selected Category: {selectedCategory}</p>
    </div>
  );
}
