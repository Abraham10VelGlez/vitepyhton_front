import React from 'react';
import Login from '../hooks/Login';
function Formx() {
    const { formik_validatelogon, loaddatax } = Login()
    return (
        <form onSubmit={formik_validatelogon.handleSubmit}>
            <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input id='u' name='u' type="email" className="input" placeholder="Email" value={formik_validatelogon.values.u}
                    onChange={formik_validatelogon.handleChange} />

                {formik_validatelogon.touched.u && formik_validatelogon.errors.u && (
                    <div role="alert" className="alert alert-error alert-dash">
                        <span>{formik_validatelogon.errors.u}</span>
                    </div>
                )}
                <label className="fieldset-label">Password</label>
                <input id='p' name='p' type="password" className="input" placeholder="Password" value={formik_validatelogon.values.p}
                    onChange={formik_validatelogon.handleChange} />
                {formik_validatelogon.touched.p && formik_validatelogon.errors.p && (
                    <div role="alert" className="alert alert-error alert-dash">
                        <span>{formik_validatelogon.errors.p}</span>
                    </div>
                )}
                <div><a className="link link-hover">Forgot password?</a></div>
                {loaddatax ?
                    (
                        <button className="btn btn-neutral mt-4" type='submit' >{loaddatax ? 'Cargando Sesión' : 'Iniciar Sesión'}</button>
                    ) : (
                        <button className="btn btn-neutral mt-4" type='submit' >Login</button>
                    )}
            </fieldset>
        </form >
    );
}
export default Formx;