import React, { useState } from "react";

const Usestatehooks = () => {
  const [num, setNum] = useState(1); // 1 ye ek initial value hai

  // setNum ye ek function hai

  // array destruring

  function inc() {
    setNum(num + 1);
  }

  function dec() {
    if (num < 1) {
      setNum(num);
    }else
    {
      setNum(num - 1);
    }
  }

  return (
    <div className="main">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-2">
            <button type="button" className="btn btn-success" onClick={inc}>
              Increment
            </button>
          </div>

          <div className="col-md-2">
            <h1 className="heading">{num}</h1>
          </div>

          <div className="col-md-2">
            <button type="button" className="btn btn-danger" onClick={dec}>
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usestatehooks;

// usestate hoook --->

// object Destrucring

// const obj = {name: 'Kushal', age: 25, place: 'sawangi'}

// const {name, age, place} = obj;

// name
// 'Kushal'
// age
// 25
// place
// 'sawangi'

// ***************************

//  arrays

// const arr = [1,2,3,4]

// const [val1, val2, val3, val4] = arr;

// val1
// 1
// val2
// 2
// val3
// 3
// val4
// 4
