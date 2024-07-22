import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [name, setName] = useState("");
  const [reg, setReg] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [detailedFeedback, setDetailedFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleReg = (e) => {
    setReg(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleFeedback = (e) => {
    setFeedback(e.target.value);
  }

  const handleDetailedFeedback = (e) => {
    setDetailedFeedback(e.target.value);
  }

  const handleRating = (value) => {
    setRating(value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback!\nName: ${name}\nEmail address: ${email}\nContact no: ${reg}\nFeedback: ${feedback}\nDetailed Feedback: ${detailedFeedback}\nRating: ${rating}`);
  }

  return (
    <div className='feedback-container'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Your Name' value={name} onChange={handleName} required />
        <input type="email" placeholder='Enter Email address' value={email} onChange={handleEmail} required />
        <input type="text" placeholder='Contact No' value={reg} onChange={handleReg} required />
        <h4>Overall Feedback</h4>
        <textarea placeholder='Type' rows="4" value={feedback} onChange={handleFeedback} required />
        <h4>Detailed Feedback</h4>
        <textarea placeholder='Type' rows="4" value={detailedFeedback} onChange={handleDetailedFeedback} />
        <h4>Rating</h4>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span 
              key={star}
              className={star <= rating ? "star checked" : "star"}
              onClick={() => handleRating(star)}
            >
              &#9733;
            </span>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Feedback;
