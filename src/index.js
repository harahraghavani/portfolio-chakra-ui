import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { ThemeProvider } from './context/ThemeContext';
import { TerminalContextProvider } from 'react-terminal';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        padding: 0,
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TerminalContextProvider>
    <ChakraProvider theme={theme} cssVarsRoot="#root">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ChakraProvider>
  </TerminalContextProvider>
);

