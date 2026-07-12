import React from 'react';
import logo from './logo.svg';
import Auth from './components/auth/Auth';
import { Button, Stack, Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import router from './components/Routes';
import { RouterProvider } from 'react-router-dom';

const  darkTheme = createTheme({
  palette: {
    mode: 'dark',

  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Container>
        <RouterProvider router={router}/>
      </Container>
    </ThemeProvider>
  )
}

export default App;
