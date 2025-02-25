import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme'; 
import { StatusBar } from 'react-native';
import { Routes } from './src/routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle='light-content' backgroundColor={theme.colors.caribbeancurrent} translucent/>
      
      <Routes />
    </ThemeProvider>
  );
};

export default App;