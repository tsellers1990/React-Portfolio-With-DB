import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import GithubCorner from 'react-github-corner';

// page routes
import Home from "./pages/Home/homepage";
import Contact from "./pages/Contact/contactme";
import Secret from "./pages/Secret/Secret";
import Portfolio from "./pages/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="fillWindow">
      <Router history={history}>
        <header>
          <Navbar />
          <GithubCorner href="https://github.com/tsellers1990" />
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/Secret" component={Secret}/>          
          <Route exact path="/Portfolio" component={Portfolio}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
