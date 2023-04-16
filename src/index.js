import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProfile from './AppProfile';
import Counter from './components/Counter';
import reportWebVitals from './reportWebVitals';
import AppCounter from './AppCounter';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppProfile />
    <AppCounter /> */}
    <App />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  