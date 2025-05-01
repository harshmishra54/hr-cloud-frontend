import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'animate.css/animate.min.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line for Bootstrap
import './styles/styles.css';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
