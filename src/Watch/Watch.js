import React, { useState } from 'react';
import a from '../SpecificItemPage/Images/watch1.jpg';
import c from '../SpecificItemPage/Images/watch2.webp';
import b from '../SpecificItemPage/Images/watch3.webp';
import './Watch.css'



function Watch({ addToCart }) {
 

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const images = [a, b, c];
  const item = {
    id: 1,
    name: 'Iphone 13 pro max',
    image: './Images/Iphone.jpg',
    price: '1,20,490'
  };

  const handleForwardClick = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  
  const handleAddToCart = () => {
    addToCart();
    alert('PRODUCT HAS BEEN ADDED TO CART');
  };
  

  const handleOrderNow = () => {
    alert('Order has been placed');
  };

  return (
      <div className={"total"}>
    <div className={`total1 ${isDarkTheme ? 'dark-theme' : ''}`}>
        <div className="specific-item-page">
          <div className="specific-item-image">
            <div className="image-container">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`image ${index === currentImageIndex ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
            <button className="forward-button" onClick={handleForwardClick}>
              Next
            </button>
            <button className="theme-toggle-button" onClick={toggleTheme}>
              {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
            </button>
          </div>
          <div className="specific-item-details">
            <h1 className="specific-item-title">PunnkFunnk 8 Ultra</h1>
            <p className="specific-item-description">
            Experience the next level of connectivity and convenience with our cutting-edge 1.99-inch display Android smartwatch. Engineered to redefine your digital lifestyle, this sleek device seamlessly integrates Bluetooth calling functionality, keeping you effortlessly in touch on the go. Elevate your daily routine with advanced features and unparalleled style. Experience the power of innovation with the PunnkFunnk 8 Ultra Smart Watch.
            </p><p><b>
            ₹1,180
            </b>
            </p>
          </div>
        </div>
        <div className="button-container">
          <button className="specific-item-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="specific-item-buttonbuy" onClick={handleOrderNow}>
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Watch;
