import React from 'react';
import '../css/intro.css'
function Logx() {
    return (
        <>
            <div className="flex w-full flex-col lg:flex-row">
                <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
                    CLUB DE LOS CHICOS PYTHON
                </div>
                <div className="divider lg:divider-horizontal">&nbsp;</div>
                <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
                    <img src='../python-logo.png' ></img>
                </div>
            </div>
            <div className="divider">🐍</div>
            <div className="flex w-full flex-col">
                <div className="card bg-base-300 rounded-box grid h-80 place-items-center">


                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                <div className="card-body">
                                    <fieldset className="fieldset">
                                        <label className="fieldset-label">Email</label>
                                        <input type="email" className="input" placeholder="Email" />
                                        <label className="fieldset-label">Password</label>
                                        <input type="password" className="input" placeholder="Password" />
                                        <div><a className="link link-hover">Forgot password?</a></div>
                                        <button className="btn btn-neutral mt-4">Login</button>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


            <span className="loading loading-infinity loading-xs"></span>
            <span className="loading loading-infinity loading-sm"></span>
            <span className="loading loading-infinity loading-md"></span>
            <span className="loading loading-infinity loading-lg"></span>



            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>



            <div className="card glass w-96">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Life hack</h2>
                    <p>How to park your car at your garage?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Logx;