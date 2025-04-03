import { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
export default function Login_express() {
    const navigate = useNavigate();
    //const { user, setUser, clearUser } = useContext(UsersContext);
    // Estado para manejar la carga
    const [loaddatax, setData] = useState(false);
    // Definir el esquema de validación con Yup
    const validationSchema = yup.object({
        userrname: yup.string()
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i, 'Solo se permiten letras, números, guiones y guiones bajos')
            .required('El correo electrónico, es obligatio'),
        passwordd: yup.string()
            .matches(
                /^(?=(?:[^A-Z]*[A-Z]){1})(?=(?:[^$]*[$]){1})[a-zA-Z0-9$]{9}$/,
                "La contraseña debe contener exactamente 9 caracteres: 7 letras o números, 1 mayúscula y 1 signo '$'"
            )
            .min(9, "La contraseña debe contener al menos 9 caracteres")
            //.max(15, "La contraseña solo puede tener maximo 15 caracteres")
            .required("El campo de contraseña es obligatorio"),
    });
    // Formik para manejar el formulario
    const formik_validatelogon = useFormik({
        initialValues: {
            userrname: "",
            passwordd: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            // console.log('Enviando formulario:', values);
            setData(true);
            const apiUrl = import.meta.env.VITE_URL_BACKEND_EXPRESSJS_API
            try {
                const response = await axios.post(
                    `${apiUrl}logxespecial`,
                    { values },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );
                // Simular un delay de 3 segundos antes de procesar la respuesta
                // console.log(response.data.ok)               
                await new Promise(resolve => {
                    setTimeout(() => {
                        if (response.data.ok) {
                            resolve(true);
                            beginsession_newcode(response)
                        } else {
                            resolve(true);
                            setData(false);
                            alert("El Chico Python no existe");
                        }
                    }, 3000);
                });

            } catch {
                setData(false);
                console.error("Error en la autenticación del usuario")
            }
        },
    });
    const beginsession_newcode = (json) => {
        setData(false);
        // Cookies.set('jwt_avg', json.data.tokenx, { expires: 1 }); // expira en 1 día        
        Cookies.set('jwt_avg', json.data.tokenx, { expires: 25 / (24 * 60) }); //25min
        sessionStorage.setItem('jwt_avg', json.data.tokenx); // almacenar en sesion                        
        navigate('/pythonavg', { replace: true });
    };
    return {
        formik_validatelogon,
        loaddatax,
    };
}