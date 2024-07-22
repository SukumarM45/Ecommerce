import * as React from 'react';
// import logo from "../Images/icon.png";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from '../SpecificItemPage/Images/laptop3.jpeg';
import { useNavigate } from 'react-router-dom';
// import '../SignUp/SignUp.css'
import { useState } from 'react';
import Profile from '../Profile/Profile';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const navi1 = useNavigate();
  const click1 = () => {
    navi1(`/Profile?name=${encodeURIComponent(fname)}&age=${encodeURIComponent(ageno)}&email=${encodeURIComponent(mail)}&gender=${encodeURIComponent(gen)}&phone=${encodeURIComponent(mob)}`);
  }

  const navi2 = useNavigate();
  const handleNavi = () => {
    navi2("/SignIn");
  }

  const [fname, setFName] = useState("");
  const [ageno, setAgeNo] = useState("");
  const [mail, setMail] = useState("");
  const [gen, setGen] = useState("");
  const [mob, setMob] = useState("");
  const signupDatas = {
    name: fname,
    age: ageno,
    email: mail,
    gender: gen,
    phone: mob
  }
  

  return (
    <><ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
        //   backgroundImage: url({img}),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container className='signupBox' component="main" maxWidth="xs">
          <CssBaseline />

          <Box
            sx={{
              // marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              backdropFilter: 'blur(8px)',
            }}
          >
            {/* <img src={logo} alt='user' height={100} width={100} /> */}
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                    onChange={(e) => { setFName(e.target.value); } } />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="age"
                    required
                    fullWidth
                    id="age"
                    label="Age"
                    autoFocus
                    onChange={(e) => { setAgeNo(e.target.value); } } />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="phonenumber"
                    required
                    fullWidth
                    id="phonenumber"
                    label="Phone Number"
                    autoFocus
                    onChange={(e) => { setMob(e.target.value); } } />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => { setMail(e.target.value); } } />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="gender"
                    label="Gender"
                    id="gender"
                    onChange={(e) => { setGen(e.target.value); } } />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password" />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Remember me!" />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={click1}
              >
                Go To Profile
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleNavi}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/SignIn" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Box>
    </ThemeProvider></>
  );
}
