import React from 'react';
import '../css/intro.css'
import Spinneravg from './Spinneravg';
import Formx from './Formx';
// import Formx_express from './Formx_express';
// import { Test_conexion_expressjs_servidor } from '../hooks/Test_conexion_expressjs_servidor';
function Logx() {
    // Test_conexion_expressjs_servidor() //expressjs
    

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
                <div className="divider"></div>
                <div className="card bg-base-200">
                    <img src='../python-logo.png' ></img>
                </div>
            </div>
            <div className="divider"></div>
            <div className="flex w-full flex-col">
                <div className="card  rounded-box grid h-80 place-items-center">


                    <div className="flex w-full flex-col lg:flex-row">
                        <div className="card rounded-box grid grow place-items-center">
                            <div className="card bg-base-300">
                                <div className="card-body">
                                    {/* <Formx_express></Formx_express> */}
                                    <Formx></Formx>
                                </div>
                            </div>
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className="card rounded-box grid grow place-items-center">
                            <div className="card bg-base-300">
                                <div className="card-body">
                                    <Spinneravg></Spinneravg>
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