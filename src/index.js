import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Nav from './components/Nav';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Slider from './components/Slider';

ReactDOM.render(
  <React.StrictMode>
    {/* <div><Nav /> */}
    <Slider />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
