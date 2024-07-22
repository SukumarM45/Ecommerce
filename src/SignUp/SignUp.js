import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { deepOrange, blue } from '@mui/material/colors';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import FilledInput from '@mui/material/FilledInput';
import Button from '@mui/material/Button';
import './SignUp.css'
import im1 from '../Images/contact.webp';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
 const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);}

  //   const [showPassword, setShowPassword] = React.useState(false);

  //   const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  //   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     event.preventDefault();}


    const navig = useNavigate();
    const click =() => {
      navig('/SignIn')
    }
  return (
  
    <div style={{
      backgroundImage:`url(${im1})`
    }}>
    
    <div class="para" > 
        <center>
        <form>
        
        <Avatar sx={{ bgcolor: blue }}>S</Avatar>
        <h2>SIGNUP</h2>
   
   
   <TextField
          id="standard-textarea"
          label="First Name  "
          placeholder="Enter here"
          multiline
          variant="standard"
        /><br></br>

<TextField
          id="standard-textarea"
          label="Last Name  "
          placeholder="Enter here"
          multiline
          variant="standard"
        /><br></br>


        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Gender</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Gender"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Male</MenuItem>
        <MenuItem value={20}>Female</MenuItem>
        <MenuItem value={30}>Other</MenuItem>
      </Select>

      
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Gender"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>lessthan 15</MenuItem>
        <MenuItem value={20}>morethan 50</MenuItem>
        <MenuItem value={30}> morethan 15</MenuItem>
      </Select>
      </FormControl><br></br>

      

      <TextField
          id="standard-textarea"
          label="Username "
          placeholder="Enter here"
          multiline
          variant="standard"
        /><br></br>

<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl><br></br>

<TextField
          id="standard-textarea"
          label="Mobile Number  "
          placeholder="Enter here"
          multiline
          variant="standard"
        /><br></br>

     </form><br></br>
     <Button onClick={click} variant="contained">NEXT</Button>
</center> </div></div>
  )
}

export default SignUp