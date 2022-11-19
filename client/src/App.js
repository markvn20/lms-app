import './App.css';
import {useState, useEffect} from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import AnimateRoutes from './components/AnimateRoutes/AnimateRoutes';

function App() {
 
  

  return (
    <div className="App">
      <Router>
        {/* <Nav /> */}
        <AnimateRoutes />
      </Router>
    </div>
  );
}

export default App;
