import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useCart } from './CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <Card style={{ width: '300px', margin: '10px' }}>
      <CardMedia component="img" alt={item.name} height="200" image={item.image} />
      <CardContent>
        <Typography variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor: '#dc3545', color: 'white', marginTop: '8px' }}
          onClick={handleRemove}
        >
          Remove
        </Button>
      </CardContent>
    </Card>
  );
};

export default CartItem;
