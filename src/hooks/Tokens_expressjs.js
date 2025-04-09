// import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from "axios";
import { useAuth } from '../route/context/UsersContext';
import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
export const Tokens_expressjs = () => {

    const [jsonwebtoken, setjwt] = useState([]);

    const { logoutss } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Código del efecto de funcion asincrona   
        const validation_jsontoken = async () => {
            // console.log("validation_jsontoken de express");
            try {
                // const apiUrl = import.meta.env.VITE_URL_BACKEND;
                const apiUrl = import.meta.env.VITE_URL_BACKEND_EXPRESSJS_API;
                const response = await axios.get(`${apiUrl}loggin_token`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true // Asegúrate de permitir cookies si es necesario
                });
                // console.log(response.data);
                //console.log(response.data.ok);
                //console.log(response.data[0].ok);
                if (response.data.ok) {
                    console.log("Autentificado");
                } else {
                    // console.log("No autentificado");
                    fn_flag_renderavg()

                }
                setjwt(response)
            } catch (error) {
                console.error('Error fetching data:', error);
                console.log([{ message: "error de validacion" }]);

            }
        }
        validation_jsontoken();
    }, []);


    const fn_flag_renderavg = async () => {
        try {
            const apiUrl = import.meta.env.VITE_URL_BACKEND_EXPRESSJS_API
            // Llamar a la API para eliminar la sesión
            const token = sessionStorage.getItem('jwt_avg') || Cookies.get('jwt_avg') || null;
            await fetch(`${apiUrl}logout`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                credentials: 'include' // Equivalente a withCredentials: true
            });
            // Limpiar el session
            // sessionStorage.removeItem('jwt_avg');
            // Cookies.remove('jwt_avg'); // Asegúrate de eliminar la cookie si no es válida        
            logoutss()
            // Redirigir a la página de inicio de sesión
            navigate('/', { replace: true });
        } catch (error) {
            console.error("Error al cerrar sesión", error);
        }
    }




    return {
        jsonwebtoken
    }

}