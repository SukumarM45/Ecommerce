// ContactPage.js
import React from 'react';
import './Contact.css';

function Contact() {
  const handleAddToCart = () => {
    alert('YOUR MESSAGE HAVE BEEN DELIVERED');
  };
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have any questions or concerns, feel free to reach out to us:</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>

          <button className="specific-item-button" onClick={handleAddToCart}>
SUBMIT          
</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
