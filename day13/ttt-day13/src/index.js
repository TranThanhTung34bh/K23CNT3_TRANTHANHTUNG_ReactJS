import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TttApp from './TttApp';
import reportWebVitals from './reportWebVitals';

const Tttroot = ReactDOM.createRoot(document.getElementById('Tttroot'));
Tttroot.render(
  <React.StrictMode>
    <TttApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
