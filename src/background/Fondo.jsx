import React from 'react'
import '../App.css'
// import Naves from './Naves';
// import Starts from './Starts';
import Title from '../components/Title';
import { Tokens_expressjs_index } from '../hooks/Tokens_expressjs_index';

function Fondo() {
  Tokens_expressjs_index()
  return (
    <>

      <div className="hero ">
        <div className="hero-content text-center">
          <div className="max-w-md">

            <Title></Title>

          </div>
        </div>
      </div>

    </>
  )
}
export default Fondo;