import '../App.css'
import Formx from '../components/Formx';
import Spinneravg from '../components/Spinneravg';
// import Naves from './Naves';
// import Starts from './Starts';
import Title from '../components/Title';
import { Test_conexion_expressjs_servidor } from '../hooks/Test_conexion_expressjs_servidor';
function Fondopython() {
  // Test_conexion_expressjs_servidor()
  return (
    <>
      <div className="mockup-browser border border-base-300 w-full">
        <div className="mockup-browser-toolbar">
          <div className="input">https://daisyui.com</div>
        </div>
        <div className=" h-max">
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Club Python Boys</h1>
                <div className="divider"></div>
                <div className="card bg-base-200">
                  <img src='../python-logo.png' ></img>
                </div>
                <p className="py-6">
                  Python is a programming language that lets you work more quickly and integrate your systems more effectively.
                  <br></br>Free Site by <a href='https://github.com/Abraham10VelGlez' className="link link-secondary">Abraham10VelGlez</a>
                </p>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <center >
                  <h5 className="text-3xl font-bold">
                    <Spinneravg></Spinneravg>
                  </h5>
                </center>
                <div className="card-body">
                  <Formx></Formx>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Fondopython;