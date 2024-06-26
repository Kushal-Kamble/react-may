import Home from "./Home";

import Footer from "./Footer";

import Contact from "./Contact";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Reacteouterdom = () => {
  return (
    <Router>
      <div>
        <h2>React Router Dom</h2>
        {/* <Home />
        <Footer />
        <Contact/> */}

        <Switch>
          <Route path="/">
            <Home />
            {/* home */}
          </Route>
          <Route path="/footer">
            <Footer />
            {/* footer */}
          </Route>
          <Route path="/contact">
            <Contact />
            {/* contact */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Reacteouterdom;
