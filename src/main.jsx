import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM correctly
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
