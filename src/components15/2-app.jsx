
import './App.css';
import './Style.css';

// bootstrap 

import "../node_modules/bootstrap/dist/css/bootstrap.css";

// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


// bootstrap 

// 15 components15

// import Customhooks from './components15/Customhooks';

import UseFetch from './components15/UseFetch';


// 15 components15

function App() {

  const [data] = UseFetch("https://dummyapi.online/api/users")

  return (
    <div className="App">

      {/* <Customhooks/> */}
      <UseFetch/>
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
  );
}

export default App;
