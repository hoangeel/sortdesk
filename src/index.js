import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from 'pages/Home';
import About from 'pages/About';
import ServiceDeitall from 'pages/ServiceDeitall';
import InsightsList from 'pages/InsightsList';
import InsightsDetail from 'pages/InsightsDetail';
import ServiceList from 'pages/ServiceList';


ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/service-deitall" element={<ServiceDeitall />}/>
        <Route path="/insights_list" element={<InsightsList />}/>
        <Route path="/insight-detail" element={<InsightsDetail />}/>
        <Route path="/insight-list" element={<ServiceList />}/>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
