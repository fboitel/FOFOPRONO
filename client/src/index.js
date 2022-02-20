import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import Standing from './routes/Standing';
import Login from './routes/Login';
import Prono from './routes/Prono';
import Rules from './routes/Rules';
import Admin from './routes/Admin';
import reportWebVitals from './test/reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {getToken, setToken} from "./utils/token";


App.defaultProps = getToken();
Standing.defaultProps = getToken();
Prono.defaultProps = getToken();
Login.defaultProps = getToken();
Rules.defaultProps = getToken();
Admin.defaultProps = getToken();


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/Standing" element={<Standing />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Prono" element={<Prono />}/>
      <Route path="/Rules" element={<Rules />}/>
      <Route path="/Admin123456789" element={<Admin />}/>
    </Routes>
  </Router>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
