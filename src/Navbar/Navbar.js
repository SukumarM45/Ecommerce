  // Navbar.js
  import React from 'react';
  import './Navbar.css'; 
  import logo from '../SpecificItemPage/Images/dirft1.jpg';
  import { styled } from '@mui/material/styles';
  import IconButton from '@mui/material/IconButton';
  import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
  import { Badge } from '@mui/material';

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  function Navbar({ cartCount }) {
    console.log("Cart count:", cartCount); // Add this line for debugging


    return (
      <div className="navbar">
        <div className="logo-space">
          <img src={logo} alt="Logo" className='logo' />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>
        <div className="nav-links">
          <a href="/Home"><b>Home</b></a>
        </div>
        <div className="nav-links">
          <a href="/Contact"><b>Contact</b> </a>
        </div>
        <div className="nav-links">
          <a href="/About"><b>About Us</b></a>
        </div>
        <div className="nav-links">
          <a href="/"><b>Logout</b></a>
        </div>
        <div className="cart-icon">
          <a href="/Cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon style={{ color: 'white' }} />
              </StyledBadge>
            </IconButton>
          </a>
        </div>
      </div>
    )
  }

  export default Navbar;
