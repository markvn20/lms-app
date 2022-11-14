import React from 'react';
import './ProtectedRoute.css'
import { Outlet, Navigate } from 'react-router-dom';
import { useUserAuth, UserContextProvider } from '../../Context/ContextProvider';
import Login from '../Login/Login';


const ProtectedRoute = () => {
    const { auth } = useUserAuth();
    return auth ? <Outlet /> :<Login /> &&  <Navigate to="/login" />
   
};

export default ProtectedRoute;