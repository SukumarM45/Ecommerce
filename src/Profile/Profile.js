import React, { useContext, useState } from 'react'
// import prof from '../Images/prof.png'
// import '../Profile/Profile.css'
import { useLocation, useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { useTheme } from '../Contexts/ThemeContext';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Profile = () => {


  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const name = params.get('name') || 'Guest';
  const age = params.get('age') || 'Unknown';
  const gender = params.get('gender') || 'Unknown';
  const phoneNumber = params.get('phone') || 'Unknown';
  const email = params.get('email') || 'Unknown';

  const navigate = useNavigate();
  const [loadShow, setLoadShow] = useState(false);
  const handlePic = () => {
    setLoadShow(true);
  }




  return (


    <div>
    <div  className="profile-container">
      <br></br>
          <Button
          onClick={handlePic}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput type="file" />
        </Button>
        <table className='table'>
            <tr>
              <td>
                <label>Name: </label>
              </td>
              <td>
                <p>{name}</p>
              </td>
            </tr>
            <tr>
                <td>
                  <label>Age: </label>
                </td>
                <td>
                  <p>{age}</p>
                </td>
            </tr>
            <tr>
                <td>
                  <label>Gender: </label>
                </td>
                <td>
                  <p>{gender}</p>
                </td>
            </tr>
            <tr>
                <td>
                  <label>Phone Number: </label>
                </td>
                <td>
                  <p>{phoneNumber}</p>
                </td>
            </tr>
            <tr>
                <td>
                  <label>Email: </label>
                </td>
                <td>
                  <p>{email}</p>
                </td>
            </tr>
            <tr>
                <td>
                  <label>Courses Enrolled: </label>
                </td>
                <td>
                  <p>0</p>
                </td>
            </tr>
            <tr>
                <td>
                  <label>Degree Courses Enrolled: </label>
                </td>
                <td>
                  <p>0</p>
                </td>
            </tr>
            <tr>
                <td>
                  <label>Certificates Achieved: </label>
                </td>
                <td>
                  <p>0</p>
                </td>
            </tr>
            
        </table>
            <Button variant="contained" onClick={() => {
              navigate("/SignUp")
            }}>
                 Update Profile
            </Button>


    </div>
    </div>
  )
}

export default Profile