import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { NotasProvider } from './context/NotasContext';

ReactDOM.render(
  <React.StrictMode>
    <NotasProvider>
      <App />
    </NotasProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
