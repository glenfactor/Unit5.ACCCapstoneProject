import  { useEffect, useState } from 'react';

const Product_URL = "https://fakestoreapi.com";

export default function CartList() {
  const [cartlist, setCartlist] = useState([]);

  useEffect(() => {
    async function fetchCarts() {
      try {
        const response = await fetch(`${Product_URL}/carts`);
        const data = await response.json();
        console.log('API Response:', data);
        setCartlist(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCarts();
  }, []);

  return (
    <div>
      <h1>Cart List</h1>
      <table>
        <thead>
          <tr>
            <th>Cart ID</th>
            <th>User ID</th>
            <th>Date</th>
            <th>Products</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {cartlist.map((cartItem) => (
            <tr key={cartItem.id}>
              <td>{cartItem.id}</td>
              <td>{cartItem.userId}</td>
              <td>{cartItem.date}</td>
              <td>
                <ul>
                  {cartItem.products.map((product) => (
                    <li key={product.productId}>
                      <p>Product ID: {product.productId}</p>
                      <p>Quantity: {product.quantity}</p>
                    </li>
                  ))}
                </ul>
              </td>
              <td>{cartItem.__v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}