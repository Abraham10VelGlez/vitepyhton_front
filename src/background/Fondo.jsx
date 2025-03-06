import React from 'react'
import '../App.css'
import Naves from './Naves';
import Starts from './Starts';
import Title from '../components/Title';

function Fondo() {

  return (
    <>

      <div className="hero ">
        <div className="hero-content text-center">
          <div className="max-w-md">            
            <Starts></Starts>
            <Title></Title>
            <Naves></Naves>                                  
          </div>
        </div>
      </div>

    </>
  )
}
export default Fondo;