
import './App.css';

// 5 components

import Firstifelseconditions from './components5/Firstifelseconditions';

// 5 components


function App() {

  let login = false;

  if(login === false){
    return <h1>Ja me tujhe nhi dikhaunga</h1>


  }




  return (
    <div className="App">

      <Firstifelseconditions/>
      
    </div>
  );
}

export default App;
