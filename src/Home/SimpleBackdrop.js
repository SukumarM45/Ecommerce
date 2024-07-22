import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';


export default function SimpleBackdrop() {

  const [open, setOpen] = React.useState(true);

  const navi2 = useNavigate()
  
  const handleClose = () =>{
    navi2("/Home")
}
 
  

  return (
    <div>
      
      <Backdrop
        sx={{ color: '#vkjdv', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
     
    </div>
  );
}