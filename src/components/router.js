import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  SearchForm  from "./searchform";
import Home  from "./Home";
const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/search" component={SearchForm} />
    </div>
  </Router>
);
 export default BasicExample;