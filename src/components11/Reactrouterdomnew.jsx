import Home from "./Home";
import Footer from "./Footer";
import Contact from "./Contact";
import Error from "./Error";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import { Link } from "react-router-dom"; Header file bnayi to separate use krna hai

const Reactrouterdomnew = () => {

  


  return (
    <Router>
      <div>
        <h2>React Router Dom</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/footer">Footer</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/error">Error</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/footer" element={<Footer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          {/* element ye ek property hai  */}
        </Routes>
      </div>
    </Router>
  );
};

export default Reactrouterdomnew;
