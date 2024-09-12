import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nom from './components/projects/Nom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { ChakraProvider } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="/myCozySpace" element={<App />} />
        <Route path="/nom" element={<Nom />} />
      </Routes>
    </Router>
    // <ChakraProvider>
        // <App />
    // </ChakraProvider>
);

