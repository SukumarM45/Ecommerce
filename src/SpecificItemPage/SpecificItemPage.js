import React, { useState } from 'react';
import a from './Images/Iphone.jpg';
import b from './Images/Iphoneb.jpg';
import c from './Images/13.webp';
import './SpecificItemPage.css';
import { useCart } from '../Cart/CartContext';

function BuyNowDialogBox({ isOpen, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [isPurchaseConfirmed, setIsPurchaseConfirmed] = useState(false);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleConfirmPurchase = () => {
    setIsPurchaseConfirmed(true);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="dialog">
      <img src={c} alt="Product" className="product-image" />
      <div className="dialog-content">
        <div className="dialog-header">
          <h2>Buy Now</h2>
          <button onClick={onClose} className="close-button">Close</button>
        </div>
        {!isPurchaseConfirmed ? (
          <div className="dialog-body">
            <div className="product-description">
              <p>Product Description:</p>
              <p>The iPhone 13 series, including the iPhone 13, iPhone 13 mini, iPhone 13 Pro, and iPhone 13 Pro Max, features improved cameras, the powerful A15 Bionic chip, 5G connectivity, longer battery life, ProMotion displays in Pro models.</p>
            </div>
          </div>
        ) : (
          <div className="arrival-message">
            <p>Your package is arriving on:</p>
            <p>{getRandomDateTime()}</p>
          </div>
        )}
        {!isPurchaseConfirmed && (
          <div className="product-details">
            <p>Quantity: {quantity}</p>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <button onClick={onClose}>Cancel</button>
           <a href='/Payment'> <button>Confirm Purchase</button></a>
          </div>
        )}
      </div>
    </div>
  );
}

// Function to get a random date and time
function getRandomDateTime() {
  const randomDate = new Date(Date.now() + Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)); // Within the next 7 days
  return randomDate.toLocaleString();
}

function SpecificItemPage({ addToCart }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const images = [a, b, c];

  const handleForwardClick = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };
   const handleAddToCart = () => {
    addToCart();
    alert('PRODUCT HAS BEEN ADDED TO CART');
  };


  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleOrderNow = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className={`total1 ${isDarkTheme ? 'dark-theme' : ''}`}>
      <div className="specific-item-page1">
        <div className="specific-item-image1">
          <div className="image-container1">
            {images.map((image, index) => (
              <div
                key={index}
                className={`image ${index === currentImageIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
          <button className="forward-button1" onClick={handleForwardClick}>
            Next
          </button>
          <button className="theme-toggle-button1" onClick={toggleTheme}>
            {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
          </button>
        </div>
        <div className="specific-item-details1">
          <h1 className="specific-item-title1">Iphone 13 pro max</h1>
          <p className="specific-item-description1">
            The iPhone 13 series, including the iPhone 13, iPhone 13 mini, iPhone 13 Pro, and iPhone 13 Pro Max, features improved cameras, the powerful A15 Bionic chip, 5G connectivity, longer battery life, ProMotion displays in Pro models, and Cinematic mode for videos. With refined design elements and iOS 15's enhancements, the iPhone 13 lineup delivers a compelling upgrade in performance and user experience.
          </p>
        </div>
        <div className="button-container1">
          <button className="specific-item-button1" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <br></br><br></br>+
          <button className="specific-item-buttonbuy1" onClick={handleOrderNow}>
            BUY NOW
          </button>
        </div>
      </div>
      <BuyNowDialogBox isOpen={isDialogOpen} onClose={handleCloseDialog} />
      <div className='suku'>
      <h1><center><b>Features</b></center></h1>
      <h4><b>ProMotion Display:</b> The iPhone 13 Pro Max features a ProMotion display with a 120Hz refresh rate, providing smoother scrolling</h4><hr></hr>
      <h4>A15 Bionic Chip: Powered by the A15 Bionic chip, the iPhone 13 Pro Max delivers improved performance, efficiency, and graphics rendering capabilities, enabling seamless multitasking and high-performance gaming</h4><hr></hr>
      <h4>Cinematic Mode: The iPhone 13 Pro Max introduces Cinematic mode, allowing users to capture professional-quality videos with shallow depth of field and automatic focus transitions, creating a cinematic experience directly from their smartphone.</h4><hr></hr>
      <h4>5G Connectivity: With 5G capabilities, the iPhone 13 Pro Max enables faster download and streaming speeds, improved network performance, and expanded coverage for an enhanced mobile experience</h4>
      </div>
    </div>
    
  );
}

export default SpecificItemPage;
