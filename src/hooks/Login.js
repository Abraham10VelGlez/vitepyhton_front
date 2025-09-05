import { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
export default function Login() {
    const navigate = useNavigate();
    const [loaddatax, setData] = useState(false);
    const validationSchema = yup.object({
        u: yup
            .string()
            .matches(
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                "Solo se permiten letras, números, guiones y guiones bajos"
            )
            .required("El correo electrónico, es obligatio"),
        p: yup
            .string()
            .matches(
                /^(?=(?:[^A-Z]*[A-Z]){1})(?=(?:[^$]*[$]){1})[a-zA-Z0-9$]{9}$/,
                "La contraseña debe contener exactamente 9 caracteres: 7 letras o números, 1 mayúscula y 1 signo '$'"
            )
            .min(9, "La contraseña debe contener al menos 9 caracteres")
            //.max(15, "La contraseña solo puede tener maximo 15 caracteres")
            .required("El campo de contraseña es obligatorio"),
    });
    const formik_validatelogon = useFormik({
        initialValues: {
            u: "",
            p: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            setData(true);
            const apiUrl = import.meta.env.VITE_URL_APIPYTHON
            try {
                const response = await axios.post(
                    //`${apiUrl}Loginnext`,
                    `${apiUrl}logsession`,
                    { values },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );
                // Simular un delay de 3 segundos antes de procesar la respuesta
                await new Promise(() =>
                    setTimeout(() => {
                        //console.log(response.data.url)                        
                        if (response.data.token) {
                            //console.log("ESTE USUARIO NO EXISTE EN SISTEMA");
                            //alert("Chico Python, Bienvenido")
                            beginsession_newcode(response)
                        } else {
                            setData(false);
                            alert("El Chico Python no existe");
                        }
                    }, 3000)
                );
            } catch (error) {
                //console.error("Error en la autenticación:", error);                
                if (error.response.data.error == 0) {
                    alert("Chico Python no encontrado en el BD RAILWAY")
                } else {
                    alert("Faltan información por mandar al Servidor")
                }
                setData(false);
            }
        },
    });
    const beginsession_newcode = (json) => {
        // console.log(json);        
        Cookies.set('jwt_avg', json.data.token, { expires: 1 }); // expira en 1 día        
        sessionStorage.setItem('jwt_avg', json.data.token); // almacenar en sesion        
        setData(false);
        // console.log(json.data.url);
        // navigate(json.data.url, { replace: true });
        navigate('/pythonavg');
    };
    return {
        formik_validatelogon,
        loaddatax,
    };
}