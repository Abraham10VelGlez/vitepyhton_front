import React from 'react';
import Login from '../hooks/Login';

function Formx() {    
    const { formik_validatelogon, loaddatax } = Login(); //// API DE PYTHON 
    return (
        <form onSubmit={formik_validatelogon.handleSubmit}>
            <fieldset className="fieldset" disabled={loaddatax}>
                <label htmlFor="email" className="fieldset-label">Email</label>
                <input
                    id="email"
                    name="u"
                    type="email"
                    className="input"
                    placeholder="Email"
                    value={formik_validatelogon.values.u}
                    onChange={formik_validatelogon.handleChange}
                />
                {formik_validatelogon.touched.u && formik_validatelogon.errors.u && (
                    <div role="alert" aria-live="polite" className="alert alert-error alert-dash">
                        <span>{formik_validatelogon.errors.u}</span>
                    </div>
                )}

                <label htmlFor="password" className="fieldset-label">Password</label>
                <input
                    id="password"
                    name="p"
                    type="password"
                    className="input"
                    placeholder="Password"
                    value={formik_validatelogon.values.p}
                    onChange={formik_validatelogon.handleChange}
                />
                {formik_validatelogon.touched.p && formik_validatelogon.errors.p && (
                    <div role="alert" aria-live="polite" className="alert alert-error alert-dash">
                        <span>{formik_validatelogon.errors.p}</span>
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

export default Formx;