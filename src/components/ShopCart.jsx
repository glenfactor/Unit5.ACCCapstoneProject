import React, { useState } from 'react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 1 },
    { id: 2, name: 'Item 2', price: 15, quantity: 2 },
    { id: 3, name: 'Item 3', price: 20, quantity: 1 },
  ]);

  // Function to handle quantity increase
  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  // Function to handle quantity decrease
  const handleDecreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  // Function to handle item removal
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price.toFixed(2)}</span>
            </div>
            <div className="quantity-controls">
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <span className="item-quantity">{item.quantity}</span>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
            <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <span>Total:</span>
        <span>${calculateTotal(cartItems)}</span>
      </div>
    </div>
  );
}

// Function to calculate the total price
const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

export default ShoppingCart;
