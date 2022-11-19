import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Login from '../Login/Login';
import Home from '../Home/Home';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { SlLocationPin } from 'react-icons/sl';
import { AnimatePresence } from "framer-motion"
import LeftContent from '../LeftContent/LeftContent';
import RightContent from '../RightContent/RightContent';

const AnimateRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <LeftContent />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route element={<ProtectedRoute />}>
                    <Route path="/main" element={<Main />}></Route>
                </Route>
            </Routes>
            <RightContent />
        </AnimatePresence>
    );
};

export default AnimateRoutes;