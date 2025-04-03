import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from "axios";
import Cookies from 'js-cookie';
export const Tokens = () => {

    const [jsonwebtoken, setjwt] = useState(null);
   
    const navigate = useNavigate();

    useEffect(() => {
        // Código del efecto de funcion asincrona   
        const validation_jsontoken = async () => {
            try {
                const apiUrl = import.meta.env.VITE_URL_BACKEND;
                const response = await axios.get(`${apiUrl}/loggin_token`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true // Asegúrate de permitir cookies si es necesario
                });
                //console.log(response.data);
                //console.log(response.data.ok);
                //console.log(response.data[0].ok);
                if (response.data.ok) {
                    console.log("Autentificado");
                } else {
                    console.log("No autentificado");
                    fn_flag()


                }
                //setjwt(response)            
            } catch (error) {
                console.error('Error fetching data:', error);
                console.log([{ message: "error de validacion" }]);

            }
        }
        validation_jsontoken();



    }, []);


   


    return {
        jsonwebtoken
    }

}