import './App.css';
import {useState, useEffect} from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Nav from './components/Nav/Nav';

function App() {
 
  

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/main" element={<Main />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
