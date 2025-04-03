import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
const Protector_ = ({
    isAllowed, children, redirectPath = '/'
}) => {
    //console.log(isAllowed);
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />
    }
    return children ? children : <Outlet />; //el Outlet renderiza el componente correspondiente a la ruta hija dentro del componente padre. 
}

export default Protector_;