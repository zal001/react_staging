import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';   //记录页面中的性能  reportWebVitals使用了web-vitals库

const root = ReactDOM.createRoot(document.getElementById('root'));
// React.StrictMode  检查代码里面不合理的地方 给出警告等--
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);


reportWebVitals();
