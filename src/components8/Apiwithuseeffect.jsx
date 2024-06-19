// useefeect hook  ->   data fetch or get krne ke liye http ka use kiya jata hai api se

import React, { useState, useEffect } from "react";

import Projectofeffecthook from "./Projectofeffecthook";

import '../Style.css';



const Apiwithuseeffect = () => {
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);
  

  useEffect(() => {
    // console.log("useEffect hook is called");

    // alert("useEffect hook is called kushal  jab page load ho tab render ho jaaye matlab tab call ho jaaye");

    async function getData() {

        // const data = await fetch(`https://hub.dummyapis.com/employee?noofRecords=20&idStarts=1001`);

        const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);

        const res = await get.json();

        setData(res);

        // console.log(res);

        // [ ` ] backtick ka use krne se aap ek string ke andar aap khi pe bhi variable ka use kar sakte hai

        // promises return krne ke liye await ka use krte hai // ye tab tak weight kre jab tak hume data get nhi ho jata



    }

    getData();

    document.title = `(${state}) Emplooyee Data`;


  }, [state]); //  [state, state2] enitially call ho jab hamara components render ho  sirf ek baar page load hone ke baad render ho jayega

  // sabse pehle page render ho tab call ho jayega  

  // render matlab jab bhi click ho tab call ho jaaye

  // jab page load ho tab render ho jaaye matlab tab call ho jaaye

  // agar koi dependency change ho


  return (
    <div>
      

      <div className="container">
      <Projectofeffecthook />
      <button onClick={() => setState(state + 2)} class="btn btn-primary">click me {state}</button>

      {
        data.map((element, index) => {
            return(
               <div className="apidata" key={index}>
                <h4>{element.firstName}</h4> 
                <h4>{element.lastName}</h4> 
                <h4>{element.email}</h4>
                <h4>{element.contactNumber}</h4>
                <h4>{element.age}</h4><hr />
               </div> 
            )
        })
      }
      
      </div>
      
    </div>
  );
};

export default Apiwithuseeffect;

