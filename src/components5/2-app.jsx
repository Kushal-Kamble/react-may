
import './App.css';

// 5 components

import Secondternaryconditions from './components5/Secondternaryconditions';

// 5 components


function App() {

  let login = true;


  return (
    <div className="App">

      {login == false ? <h1>me abhi bhi nhi dikhaunga</h1> : <div> true hai bhai dekh le</div>}
      
      <Secondternaryconditions/>
      
    </div>
  );
}

export default App;
