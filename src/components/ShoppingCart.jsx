
import { Link } from 'react-router-dom';

export default function ShoppingCart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  calculateTotal,
}) {
  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);

  return (
    <div className="cart-list">
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {/* Display the item counter */}
          <p>Total Items: {totalItems}</p>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td>
                    {/* Link to the product details page */}
                    <Link to={`/products/${cartItem.id}`} className="product-link">
                      {cartItem.title}
                    </Link>
                  </td>
                  <td className="price-link">${cartItem.price.toFixed(2)}</td>
                  <td>
                    <div className="quantity-control">
                      <button onClick={() => decreaseQuantity(cartItem.id)}>-</button>
                      <span>{cartItem.quantity}</span>
                      <button onClick={() => increaseQuantity(cartItem.id)}>+</button>
                    </div>
                  </td>
                  <td>
                    <button onClick={() => removeFromCart(cartItem.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="total">
        Total: ${calculateTotal()}
      </div>
      <button>Continue Shopping</button>
      <button>Checkout</button>
      
      {/* Add other checkout or navigation buttons here */}
    </div>
  );
}

