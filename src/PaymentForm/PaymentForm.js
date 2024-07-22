import React, { useState } from "react";
import "./Payment.css"; // Import CSS file for styling

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Display form data in console (you can replace this with your backend logic)
  };

  return (
   
    
    <div className="payment-container">
   <h1>CREDIT CARD PAYMENT</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength="16"
            required
          />
        </div>
        <div className="form-group">
          <label>Cardholder Name:</label>
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Expiry Date:</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            maxLength="5"
            required
          />
        </div>
        <div className="form-group">
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            maxLength="3"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Pay Now
        </button>
      </form>
    </div>
    
  );
};

export default PaymentForm;