import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import { Budget } from "./components/myBudget.js"

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Budget />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


