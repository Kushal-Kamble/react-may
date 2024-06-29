// Props Drillings

// usecontdext ka use krenge data get karne ke liye

import { useState, createContext } from "react";

import CompA from "./CompA";

const SalmanKhan = createContext();

const Context = () => {
  const [data, setData] = useState("Kushal Kamble");
  const [name, setName] = useState({name: "Kushal web", age: 25});

  // mujhe ye data comC tak pohchana hai

  // ye data me prop ka use krke bhi le ja sakta hoo

  return (
    <div className="comp">
      <SalmanKhan.Provider value={{data , name}}>
        <h2>UseContext</h2>
        <CompA />
        {/* <CompA data={data} /> */}
      </SalmanKhan.Provider>
    </div>
  );
};

export default Context;
export {SalmanKhan}
