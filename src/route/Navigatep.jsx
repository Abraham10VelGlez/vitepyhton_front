import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Fondo from '../background/Fondo';
//BrowserRouter as Router
export default function Navigatep() {
    return (
        /*<Router>*/
        <Routes>
            <Route path="/" index element={<Fondo />} />
            <Route path="/wolrd" element={<Home />} />
            {/* comodin para dar por defecto la pagina que no sirve */}
            <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
        /*</Router>*/
    );
}
function Home() {
    return (<><p> 🐍 VITE + PYTHON, BIENVENIDO CHIKO PYTHON 🐍 </p></>);
}


function NotFound() {
    return (<><p> 🐍 ESTA PAGINA NO EXISTE CHIKO PYTHON 🐍 </p></>);
}