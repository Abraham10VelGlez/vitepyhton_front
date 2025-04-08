import React from 'react';
import Login_express from '../hooks/Login_express';
// import Login from '../hooks/Login';

function Formx_express() {
    // const { formik_validatelogon, loaddatax } = Login(); //// API DE PYTHON 
    const { formik_validatelogon, loaddatax } = Login_express(); // API DE EXPRESSJS

    return (
        <form onSubmit={formik_validatelogon.handleSubmit}>
            <fieldset className="fieldset" disabled={loaddatax}>
                <label htmlFor="email" className="fieldset-label">Email</label>
                <input
                    id="email"
                    name="userrname"
                    type="email"
                    className="input"
                    placeholder="Email"
                    value={formik_validatelogon.values.u}
                    onChange={formik_validatelogon.handleChange}
                />
                {formik_validatelogon.touched.userrname && formik_validatelogon.errors.userrname && (
                    <div role="alert" aria-live="polite" className="alert alert-error alert-dash">
                        <span>{formik_validatelogon.errors.userrname}</span>
                    </div>
                )}

                <label htmlFor="password" className="fieldset-label">Password</label>
                <input
                    id="password"
                    name="passwordd"
                    type="password"
                    className="input"
                    placeholder="Password"
                    value={formik_validatelogon.values.passwordd}
                    onChange={formik_validatelogon.handleChange}
                />
                {formik_validatelogon.touched.passwordd && formik_validatelogon.errors.passwordd && (
                    <div role="alert" aria-live="polite" className="alert alert-error alert-dash">
                        <span>{formik_validatelogon.errors.passwordd}</span>
                    </div>
                )}

                <div><a className="link link-hover" href="#">Forgot password?</a></div>

                {loaddatax ? (
                    <span className="loading loading-infinity loading-xl text-success"></span>
                ) : (
                    <button className="btn btn-neutral mt-4" type="submit">Login</button>
                )}
            </fieldset>
        </form>
    );
}

export default Formx_express;