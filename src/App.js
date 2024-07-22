// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import SpecificItemPage from './SpecificItemPage/SpecificItemPage';
import Cart from './Cart/Cart';
import Navbar from './Navbar/Navbar';
import Aboutus from './Aboutus/Aboutus';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import SignIn from './SignIn/SignIn';
import { CartProvider } from './Cart/CartContext';
import Watch from './Watch/Watch';
import Laptop from './Laptop/Laptop';
import ParentComponent from './Navbar/ParentComponent';
import AuthPage from './AuthPage/AuthPage';
import SimpleBackdrop from './Home/SimpleBackdrop';
import Profile from './Profile/Profile';
import PaymentForm from './PaymentForm/PaymentForm';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    console.log("Adding to cart"); // Add this line for debugging
    setCartCount(prevCount => prevCount + 1);
  };
  
  // State to manage cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
 

  return (
    
    <BrowserRouter>
    <Navbar cartCount={cartCount} />
      <CartProvider>
      <Routes>
        <Route path='/' element={<AuthPage/>} />
        
        <Route path='/Signin' element={<SignIn />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Sip' element={      <SpecificItemPage addToCart={addToCart} />
} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Watch' element={<Watch addToCart={addToCart}/>} />
        <Route path='/Laptop' element={<Laptop addToCart={addToCart}/>} />
        <Route path='/About' element={<Aboutus />} />
        <Route path='/Payment' element={<PaymentForm />} />
        <Route path='/Cart' element={<Cart cartItems={cartItems} />} />
        {/* <Route path='/Profile' element={<Profile />} /> */}

      </Routes>
      </CartProvider>
      </BrowserRouter>

  );
}

export default App;
