import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#cfb87c',
      light: '#efddad',
      dark: '#75580b',
      contrastText: '#404F62',
    },
    secondary: {
      main: '#CD9C1A',
    },
    background: {
      default: '#ffffff',
    },
    info: {
      main: '#2196f3',
    },
    text: {
      primary: '#363738',
      secondary: '#404F62',
      disabled: '#B8B6B6',
    },
    divider: '#D0D0D0',
  },
  typography: {
    h1: {
        fontSize: 20,
        lineHeight: '26px',
        letterSpacing: '0em',
        fontWeight: 550,
    },
    h2: {
        fontSize: 16,
        lineHeight: '21px',
        letterSpacing: '0em',
    },
    h3: {
        fontSize: 15, 
        lineHeight: '20px',
        letterSpacing: '0em',
    },
    h4: {
      fontSize: 14,
      lineHeight: '19px',
      letterSpacing: '0em',
    },
    h5: {
      fontSize: 13,
      lineHeight: '35px',
      letterSpacing: '0em',
    },
    h6: {
      fontSize: 12,
      lineHeight: '16px',
      letterSpacing: '0em',
    },
  },
});