import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Fondo from '../background/Fondo';
import Protector_ from './protector';
import Cookies from 'js-cookie';
import Inicio from '../sessions/Inicio';
//BrowserRouter as Router
export default function Navigatep() {
    return (
        /*<Router>*/
        <Routes>
            <Route path="/" index element={<Fondo />} />
            <Route path="/wolrd" element={<Home />} />

            <Route element={<Protector_ isAllowed={Cookies.get('jwt_avg')} />}>

                <Route path='/pythonavg' element={<Inicio />} />
                <Route path='/pythoniza' element={<Session_tempral />} />

            </Route>
            {/* comodin para dar por defecto la pagina que no sirve */}
            <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
        /*</Router>*/
    );
}
function Home() {
    return (<><p> 🐍 VITE + PYTHON, BIENVENIDO CHIKO PYTHON, ruta libre 🐍 </p></>);
}

function Session_tempral() {
    return (<><p> 🐍 VITE + FLASK PYTHON, BIENVENIDO CHIKO PYTHON, SESSION COMPLETA, RUTA PROTEGIDA 🐍 </p></>);
}


function NotFound() {
    return (<><p> 🐍 ESTA PAGINA NO EXISTE CHIKO PYTHON 🐍 </p></>);
}