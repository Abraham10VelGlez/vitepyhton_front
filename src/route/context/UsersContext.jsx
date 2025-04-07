import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

export const UsersContext = createContext(null);
export const UsersProvider = ({ children }) => {

    //     Beneficios de este enfoque
    // No necesitas acceder a cookies directamente desde todos lados.

    // Toda la lógica de autenticación está centralizada.

    // Puedes usar tokenuser, loginss(), logoutss() desde cualquier parte con useAuth().


    const [tokenuser, setTokenuser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cookieToken = Cookies.get('jwt_avg');
        if (cookieToken) {
            setTokenuser(cookieToken);
        }
        setLoading(false);
    }, []);

    const clearUser = () => {
        setTokenuser([]); // Restablecer el estado inicial
    };

    const loginss = (newToken) => {
        Cookies.set('jwt_avg', newToken, { expires: 25 / (24 * 60) });
        sessionStorage.setItem('jwt_avg', newToken);
        // Cookies.set('jwt_avg', json.data.tokenx, { expires: 25 / (24 * 60) }); //25min
        // sessionStorage.setItem('jwt_avg', json.data.tokenx); // almacenar en sesion                        
        setTokenuser(newToken);
    };

    const logoutss = () => {
        Cookies.remove('jwt_avg');
        sessionStorage.removeItem('jwt_avg');
        setTokenuser(null);
    };


    return (
        /* esta forma de colocar los estados entre {} y quitar el uso de [] es para Mejor Práctica: Usar un Objeto para el Valor del Contexto.
        En lugar de devolver un array en el value, 
        es más claro y mantenible devolver un objeto
         que contenga todos los estados y funciones que deseas compartir en tu contexto. 
         Esto te permite acceder a cada estado por su nombre,
          lo cual es más intuitivo y evita posibles errores.
        */
        <UsersContext.Provider value={{ tokenuser, loading, clearUser, loginss, logoutss }}>
            {children}
        </UsersContext.Provider>
    );
};

export const useAuth = () => useContext(UsersContext);