import { Route, Routes } from 'react-router-dom';
import Protector_ from './protector';
import Inicio from '../sessions/Inicio';
import Fondopython from '../background/Fondopython';
export default function Navigatep() {
    return (
        <Routes>
            {/* esta ruta es para la conexion con expressjs */}
            {/* <Route path="/" index element={<Fondo />} /> */}
            <Route path="/" index element={<Fondopython />} />
            <Route path="/wolrd" element={<Home />} />

            <Route element={<Protector_ allowedRoles={[1]} />}>                
                <Route path='/pythonavg' element={<Inicio />} />
                <Route path='/pythoniza' element={<Session_tempral />} />
            </Route>

            <Route element={<Protector_ allowedRoles={[100]} />}>            
                <Route path='/pyadminavg' element={<Session_tempral_admin />} />
            </Route>
            {/* comodin para dar por defecto la pagina que no sirve */}
            <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
    );
}
function Home() {
    return (<><p> 🐍 VITE + PYTHON, BIENVENIDO CHIKO PYTHON, ruta libre 🐍 </p></>);
}
function Session_tempral() {
    return (<><p> 🐍 VITE + FLASK PYTHON, BIENVENIDO CHIKO PYTHON, SESSION COMPLETA, RUTA PROTEGIDA 🐍 </p></>);
}
function Session_tempral_admin() {
    return (<><p> 🐍 VITE + FLASK PYTHON, BIENVENIDO CHIKO PYTHON ADMINISTRADOR, SESSION COMPLETA, RUTA PROTEGIDA 🐍 </p></>);
}
function NotFound() {
    return (<><p> 🐍 ESTA PAGINA NO EXISTE CHIKO PYTHON 🐍 </p></>);
}