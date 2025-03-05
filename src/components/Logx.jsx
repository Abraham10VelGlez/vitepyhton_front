import React from 'react';
import '../css/intro.css'
import Spinneravg from './Spinneravg';
function Logx() {
    return (
        <>
            <div className="flex w-full flex-col">
                <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">


                    <div className="hero ">
                        <div className="hero-content text-center">
                            <div className="">
                                <p className="py-2">
                                    CLUB DE LOS CHICOS PYTHON
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="divider">🐍</div>
                <div className="card bg-base-200">
                    <img src='../python-logo.png' ></img>
                </div>
            </div>
            <div className="divider">🐍</div>
            <div className="flex w-full flex-col">
                <div className="card bg-base-300 rounded-box grid h-80 place-items-center">


                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">

                                <div className="flex w-full">
                                    <div className="card bg-base-200 ">

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
                                    <div className="divider divider-horizontal"></div>
                                    <div className="card bg-base-200 rounded-box grid w-55  place-items-center">
                                        <Spinneravg></Spinneravg>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Logx;