import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Login from '../pages/login.jsx';
import { Navigate } from 'react-router-dom';

export default function Navbar() {
  
  const handleSubmit = () => {
    localStorage.setItem('auth',false);
    <Navigate to="<Login />" />
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="navbar">
          <Link to="/">
            <Box component="img" sx={{width: '237px', height: '48px',}} alt="WeWorkSMART Logo" src="WeWorkSMART/logo2@2x.png" />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button sx={{color: "#404F62" }} onSubmit={handleSubmit}>Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>


  );
}
