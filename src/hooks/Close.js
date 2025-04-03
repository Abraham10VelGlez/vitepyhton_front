import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from "axios";
import Cookies from 'js-cookie';
export const Close = () => {

    const [jsonwebtoken, setjwt] = useState(null);
    const [cerrar, setclose] = useState(false);
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


    const sessiondestroy = async () => {
        //await console.log("cerrando sesion");
        setclose(true)
        try {
            //const logout_system = await axios.get('/api/create_data')
            const apiUrl = import.meta.env.VITE_URL_BACKEND;
            const logout_system = await axios.get(`${apiUrl}/logout`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true // Asegúrate de permitir cookies si es necesario
            })
            await new Promise(resolve => {
                setTimeout(() => {
                    resolve(true)
                    setclose(false)


                    //console.log(logout_system.data);
                    if (logout_system.data.ok) {
                        //elimina las variables de almacenamiento de sesion,
                        sessionStorage.removeItem('NazyXuseremail');
                        sessionStorage.removeItem('NazyXuserId');
                        sessionStorage.removeItem('NazyXuserName');
                        Cookies.remove('jwt_avg'); // Asegúrate de eliminar la cookie si no es válida
                        Cookies.remove('NazyXuseremail'); // Asegúrate de eliminar la cookie si no es válida
                        Cookies.remove('NazyXuserId'); // Asegúrate de eliminar la cookie si no es válida
                        Cookies.remove('NazyXuserName'); // Asegúrate de eliminar la cookie si no es válida
                        navigate('/', { replace: true }); // Reemplazar la ruta actual                        
                        //window.location.href = '/';
                    }

                }, 3000);
            });

        } catch (error) {
            setclose(false)
        } finally {
            setclose('finalizo')
            setclose(false)
        }

    }




    return {
        jsonwebtoken, sessiondestroy, cerrar
    }

}