import React from 'react';
import './Aboutus.css'; // Import your CSS file for styling

function Aboutus() {
  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <h2>About Us</h2>
        <p>Welcome to our online store!</p>
        <p>We are dedicated to providing you with the best shopping experience possible.</p>
        <p>Our team works hard to ensure that every customer is satisfied with their purchase.</p>
        <p>Thank you for choosing us for all your shopping needs!</p>
</div><br></br><br></br>
      <div className="about-us-container">
        {/* Mission and Vision */}
        <h3>Mission</h3>
        <p>to provide you with a seamless and enjoyable experience. With an emphasis on innovation and customer satisfaction,
           we strive to be your go-to destination for all your shopping needs.
            Welcome to Drift, where shopping meets convenience and quality.
</p>
</div><br></br>
      <div className="about-us-container">
        <h3>Vision</h3>
        <p>revolutionize online shopping. We strive to create a platform that offers seamless, personalized experiences tailored to your needs. With innovation at our core, 
          we're committed to redefining the online shopping ess, enjoyable shopping..</p>
          </div>
      </div>
  );
}

export default Aboutus;
