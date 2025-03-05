import React from 'react'
import '../App.css'
import Naves from './Naves';
import Starts from './Starts';
import Title from '../components/Title';

function Fondo() {

  return (
    <>
      <div className='bodyxxx'>
        <Title></Title>
        <Starts></Starts>
        <Naves></Naves>
      </div>

    </>
  )
}
export default Fondo;