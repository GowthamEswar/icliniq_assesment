// Cart.tsx
import React from 'react';

interface CartItem {
  _id: string;
  productId: string;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  updateCartItem: (cartItem: CartItem) => void;
  removeFromCart: (cartItemId: string) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, updateCartItem, removeFromCart }) => {
  return (
    <ul>
      {cartItems.map(cartItem => (
        <li key={cartItem._id}>
          <h3>{cartItem.productId}</h3> {/* Replace with actual product name */}
          <p>Quantity: {cartItem.quantity}</p>
          <button onClick={() => updateCartItem(cartItem)}>Update Quantity</button>
          <button onClick={() => removeFromCart(cartItem._id)}>Remove from Cart</button>
        </li>
      ))}
    </ul>
  );
};

export default Cart;
