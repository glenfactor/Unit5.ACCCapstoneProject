import React from 'react';

export default function Cart({ cart, removeFromCart}) {
    return (
 <div>
    <h2>Shopping Cart</h2>
    <ul>
    {cart.map((item, index) => (
      <li key={index}>
        {item.name}
        <button onClick={() => removeFromCart(item)}>Remove</button>
      </li>
    ))}
    </ul>
 </div>

    );
}