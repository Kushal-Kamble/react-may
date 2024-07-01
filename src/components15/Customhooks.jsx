
import {useState} from "react";
import {useEffect} from "react";


const Customhooks = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData(){
      const call = await fetch("https://dummyapi.online/api/users");
      const res =  await call.json();
      console.log(res);
      setData(res);

      
    }

    getData();
  },[])

  return (
    <div>
        <div className="conatiner">
            <div className="row">
                <h2>Custom Hooks</h2>
                {data.map((e, i) => {
                  return <div className="row">
                    {/* <div className="col-md-3"><h6 key={i}>{e.name}</h6> </div> */}
                    <div className="col-md-3"><h6 >{e.name}</h6> </div>
                    <div className="col-md-3"><h6 >{e.email}</h6> </div>
                    <div className="col-md-3"><h6 >{e.address.street}</h6> </div>
                    <div className="col-md-3"><h6 >{e.address.zipcode}</h6> </div>
                  </div>
                })}
            </div>
        </div>
      
    </div>
  )
}

export default Customhooks
