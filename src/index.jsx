
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { themes } from './theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


root.render(
  <StrictMode>
    
    <ChakraProvider theme={themes}>
      <div className="con">
        <App />
      </div>
    </ChakraProvider>
  </StrictMode>
);
