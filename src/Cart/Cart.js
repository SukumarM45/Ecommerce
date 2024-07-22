import React, { useState, useEffect } from 'react';
import './CartPage.css';

function CartPage() {
  const [cartItems, setCartItems] = useState([]); // State to store cart items

  // Fetch cart items from local storage or an API (replace with your data fetching logic)
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const handleRemoveItem = (itemIndex) => {
    const updatedCartItems = [...cartItems]; // Create a copy to avoid mutation
    updatedCartItems.splice(itemIndex, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update local storage
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0); // Calculate total price
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is currently empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: {item.price}</p>
                  <button onClick={() => handleRemoveItem(index)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div style={{ padding: '100px' }}>
          {cartItems.length > 0 && ( // Only display summary if cart is not empty
            <div className="cart-summary">
              <h3>Cart Summary</h3>
              <p>Total Items: {cartItems.length}</p>
              <p>Total Price: ${calculateTotalPrice()}.00</p>
              <button>Proceed to Checkout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
