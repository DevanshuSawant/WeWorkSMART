import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';


export default function Footer() {
  return (
    <BottomNavigation sx={{ height: "8vh", bgcolor: "#CFB87C", justifyContent: "left" }} >
      <p class="footer-text">©All Rights Reserved</p>
    </BottomNavigation>
  );
}