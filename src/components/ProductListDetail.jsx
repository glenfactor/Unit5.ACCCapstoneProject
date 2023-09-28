import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetail({ addToCart }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        console.log('API Response:', data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // You can display a loading indicator here
  }

  return (
    <div>
      <div className='productlist-detail-title'>
        <div>
          <h1>Shop Now</h1>
        </div>
        <div>
          <button className="back-button" onClick={() => window.history.back()}>Go Back</button>
        </div>
      </div>

      <div className="productlist-detail">
        <img src={product.image} alt={product.title} />
        <div className="right-side">
          <h2>{product.title}</h2>
          <span>Description</span>
          <p>{product.description}</p>
          <span>Price</span>
          <p className="price-tag">${product.price}</p>
          <span>Category</span>
          <p>{product.category}</p>
          {/* Use addToCart prop function to add the product to the cart */}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
