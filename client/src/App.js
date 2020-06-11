import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

// page routes
import Home from "./pages/Home/homepage";
import Contact from "./pages/Contact/contactme";
import Portfolio from "./pages/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router history={history}>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Portfolio" component={Portfolio}/>
      </Switch>
    </Router>
  );
}

export default App;
