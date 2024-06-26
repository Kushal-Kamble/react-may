import Home from "./Home";
import Footer from "./Footer";
import Contact from "./Contact";
import Error from "./Error";
import './Style.css'

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

const Reactrouterhooks = () => {

  const navLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "#f1c40f" : "white",
      fontSize: "18px",
    }
  }

  return (
    <Router>
      <div>
      
        <nav>
          <ul>
            <li>
              <NavLink style={navLinkStyle} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to="/footer">Footer</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyle} to="/error">Error</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Reactrouterhooks;
