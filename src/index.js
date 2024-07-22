import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dialogue from './Dialouge/Dialogue'
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar/Navbar';
import App from './App';
import Watch from './Watch/Watch'
;
import PaymentForm from './PaymentForm/PaymentForm';
import AuthPage from './AuthPage/AuthPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Home/> */}
    <App/>
    {/* <Watch/> */}
    {/* <AuthPage/> */}
    {/* <Dialogue/> */}
    {/* <SignUp/> */}
    {/* <Sig/> */}
    {/* <PaymentForm/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
