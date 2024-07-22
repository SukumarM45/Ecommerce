// ParentComponent.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import SpecificItemPage from '../SpecificItemPage/SpecificItemPage';
function ParentComponent() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    console.log("Adding to cart"); // Add this line for debugging
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <SpecificItemPage addToCart={addToCart} />
    </div>
  );
}

export default ParentComponent;
