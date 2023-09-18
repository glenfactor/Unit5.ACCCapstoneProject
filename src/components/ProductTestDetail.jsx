import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Product_URL = "https://fakestoreapi.com";

function ProductTestDetail() {
  const { id } = useParams();
  const history = useHistory(); // Get the history object
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Fetch product details from the third-party API using the 'id'
    fetch(`${Product_URL}/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleGoBack = () => {
    // Use history.goBack() to navigate back
    history.goBack();
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: '100px' }} />
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
}

export default ProductTestDetail;
