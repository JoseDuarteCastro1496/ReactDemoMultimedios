// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import { UserProvider } from './contexts/UserContext.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// Componentes
import App from './App.jsx';
const themeOptions = createTheme({
  palette: {
    mode: 'light',         
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
