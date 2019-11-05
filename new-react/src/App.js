import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import ReactDOM from 'react-dom';
// import Type from './App.js';


import Login from "./components/Login";
import Register from "./components/Register";
import List from "./components/List";


import logo from "./logo.png";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://github.com/AkshayAchu4oo7/ReactProject.git" >
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/App" className="navbar-brand">Akshay's React Project</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/Login" className="nav-link">Login</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/Register" className="nav-link">Register</Link>
                </li>
				<li className="navbar-item">
                  <Link to="/List" className="nav-link">List</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/List" component={List} />
        </div>
      </Router>
    );
  }
}

export default App;