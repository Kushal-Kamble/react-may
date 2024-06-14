
import './App.css';


// 1 st components1

// import Header from './components1/Header-1';
import Header from './components1/Header-1';

// 1 st components1




function App() {

  let hero1 = "Web Developer"


  return (
    <div className="App">
      <Header/>
      <h1>Hello Kushal Kamble</h1>
      <h2>{hero1}</h2>
      <Header/>
    </div>
  );
}

export default App;
