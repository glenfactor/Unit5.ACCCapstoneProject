
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product_URL = "https://fakestoreapi.com";

/* const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
 */
 /*  useEffect(() => {
    // Fetch product details based on the 'id' parameter from the URL
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [id]); */

  export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`${Product_URL}/products/${id}`);
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
      <div><h1>Shop Now</h1></div>
      <div><button className="back-button" onClick={() => window.history.back()}>Go Back</button></div>
      </div>
      
      <div  className="productlist-detail">
      <img src={product.image} alt={product.title} />
      <div className="right-side">
      <h2>{product.title}</h2>
      <span>Description</span>
      <p>{product.description}</p>
      <span>Price</span>
      <p className="price-tag">${product.price}</p>
      <span>Category</span>
      <p>{product.category}</p>
      {/* Add other product details as needed */}
      <Link to="/products"><button>Add to Cart</button></Link>
      </div>  
      </div>
      
    </div>
  );
}

/* export default ProductDetail; */
