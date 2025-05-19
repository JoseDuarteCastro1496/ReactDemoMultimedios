// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; 
import { UserProvider } from './contexts/UserContext.jsx';

// IMPORTS CORRECTOS PARA MUI v5
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const themeOptions = createTheme({
  palette: {
    mode: 'light',            // 'light' o 'dark'
    primary: {
      main: '#1dc497',
    },
    secondary: {
      main: '#e65d8a',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <UserProvider>
        <BrowserRouter>
         <App></App> 
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  </StrictMode>
);
