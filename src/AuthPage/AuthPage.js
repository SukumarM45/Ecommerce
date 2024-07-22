import React, { useState } from 'react';
import './AuthPage.css';





const AuthPage = ({ onAuthSuccess }) => {
  const [isSignUp, setSignUp] = useState(true);
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleForm = () => {
    setSignUp(!isSignUp);
  };

  const handleSubmit = () => {
    // Your authentication logic here
    if (
        (isSignUp && (!name || !mobileNumber || !age || !address)) ||
        (!isSignUp && (!username || !password))
      ) {
        alert('Please fill in all required fields.');
        return;
      }
    const action = isSignUp ? 'Sign Up' : 'Sign In';
    const userData = {
      name,
      mobileNumber,
      age,
      address,
    };
    onAuthSuccess(userData);

    alert(`${action} Successful!\n${JSON.stringify(userData, null, 2)}`);
  };

  const generateAgeOptions = () => {
    const ageOptions = [];
    for (let i = 18; i <= 100; i++) {
      ageOptions.push(<option key={i} value={i}>{i}</option>);
    }
    return ageOptions;
  };

  const click = () =>{
    alert("Successfully loged in")
  }

  return (
    
    <div className="auth-container">
      <div className="form-container">
    
      
      {/* <Avatar src={im1} sx={{ width: 60, height: 60 } } /> */}
 {/* <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2> */}

        {isSignUp && (
          <>
            <div className="input-group">
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="input-group">
              <label>Mobile Number:</label>
              <input type="number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
            </div>

            <div className="input-group">
              <label>Age:</label>
              <select value={age} onChange={(e) => setAge(e.target.value)}>
                <option value="" disabled>Select Age</option>
                {generateAgeOptions()}
              </select>
            </div>

            <div className="input-group">
              <label>Address:</label>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
          </>
        )}

        {!isSignUp && (
          <>
            <div className="input-group">
              <label>Username:</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="input-group">
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </>
        )}

        <a href = '/Home'>

        <button onClick = {click}>Login</button>
        </a>

        <p className="toggle-link" onClick={handleToggleForm}>
          {isSignUp ? 'Already have an account? Sign In here' : 'Don\'t have an account? Sign Up here'}
        </p>
      </div>
    </div>
    
  );
};

export default AuthPage;
