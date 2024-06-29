
import './Style.css';

import React, {useContext}  from 'react';

import { SalmanKhan } from './Context';

// const CompC = ({data}) => {
const CompC = () => {

    const SohailKhan = useContext(SalmanKhan)
  return (
    <div className='compc'>
        <h2>comp c</h2>
        <h1>{SohailKhan.data}</h1>
        <h1>name: {SohailKhan.name.name}</h1>
        <h1>age: {SohailKhan.name.age}</h1>
        {/* <h2>{data}</h2> */}
      
    </div>
  )
}

export default CompC
