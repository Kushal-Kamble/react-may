import "./Style.css";

// 3 st components3

import Propsconcept1 from "./components3/Propsconcept1";

// 3 st components3

function App() {
  return (
    <div className="Hero">
      <h1>Hello Kushal Kamble</h1>

      <Propsconcept1 name="Vishal 16 march - 2001" age={22} place="sawangi" />

      <Propsconcept1 name="Kushal 18 June - 1998" age={25} place="Pune" />

      <Propsconcept1 name="Salman 15 march - 2005" age={50} place="sawangi" />

      
    </div>
  );
}

export default App;
