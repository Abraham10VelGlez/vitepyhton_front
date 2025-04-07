import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from './context/UsersContext';
const Protector_ = ({
    children, redirectPath = '/'
}) => {
    const { tokenuser, loading } = useAuth();
    // console.log(tokenuser);    
    if (loading) return null; // o spinner de carga opcional

    if (!tokenuser) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;//el Outlet renderiza el componente correspondiente a la ruta hija dentro del componente padre. 
}

export default Protector_;