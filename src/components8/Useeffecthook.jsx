// useefeect hook  ->   data fetch or get krne ke liye http ka use kiya jata hai api se

import React, { useState, useEffect } from "react";

import Projectofeffecthook from "./Projectofeffecthook";

const Useeffecthook = () => {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);

  useEffect(() => {
    // console.log("useEffect hook is called");
    alert("useEffect hook is called kushal  jab page load ho tab render ho jaaye matlab tab call ho jaaye");
  }, []); //  [state, state2] enitially call ho jab hamara components render ho  sirf ek baar page load hone ke baad render ho jayega

  // sabse pehle page render ho tab call ho jayega  

  // render matlab jab bhi click ho tab call ho jaaye

  // jab page load ho tab render ho jaaye matlab tab call ho jaaye

  // agar koi dependency change ho

  console.log("Function body call");

  return (
    <div>
      

      <div className="container">
      <Projectofeffecthook />
      <button onClick={() => setState(state + 1)} class="btn btn-primary me-3 mt-5">click me {state}</button>
      <button onClick={() => setState2(state2 + 1)} class="btn btn-success mt-5">click me {state2}</button>
      </div>
      
    </div>
  );
};

export default Useeffecthook;
