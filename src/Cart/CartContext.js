import React, { createContext, useContext, useReducer } from 'react';

// Create a context object
const CartContext = createContext();

// Define the initial state for the cart
const initialState = {
  items: [],
};

// Define a reducer function to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { items: [...state.items, action.payload] };
    case 'REMOVE_FROM_CART':
      return { items: state.items.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};

// Create a provider component to wrap the application
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Action creator functions
  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  // Provide the cart state and action creators to the context
  return (
    <CartContext.Provider value={{ cart: state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
