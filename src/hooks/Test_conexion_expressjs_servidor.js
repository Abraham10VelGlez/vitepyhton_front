
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from "axios";
import Cookies from 'js-cookie';
export const Test_conexion_expressjs_servidor = () => {

    const [jsonwebtoken, setjwt] = useState(false);


    useEffect(() => {
        // Código del efecto de funcion asincrona   
        const validation_server_ = async () => {
            try {
                const apiUrl = import.meta.env.VITE_URL_BACKEND_EXPRESSJS_API_SERVER;
                const response = await axios.get(`${apiUrl}jwt`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true // Asegúrate de permitir cookies si es necesario
                });
                console.log(response);
                setjwt(true)
            } catch (error) {
                console.error('Error fetching data:', error);
                console.log([{ message: "error de validacion" }]);
            }
        }


        const validation_server_post = async () => {

            try {
                const apiUrl = import.meta.env.VITE_URL_BACKEND_EXPRESSJS_API_SERVER
                // Llamar a la API para eliminar la sesión
                // const token = sessionStorage.getItem('jwt_avg') || Cookies.get('jwt_avg') || null;
                // const aaaa = await fetch(`${apiUrl}login`, {
                const aaaa = await fetch(`https://almacen_igecem.edomex.gob.mx/login`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include' // Equivalente a withCredentials: true
                });
                console.log(aaaa);


            } catch (error) {
                console.error("Error al cerrar sesión", error);
            }


        }
        validation_server_();
        validation_server_post()

    }, []);





    return {
        jsonwebtoken
    }

}