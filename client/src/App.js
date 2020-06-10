import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

// page routes
import Home from "./pages/Home/Home.js";
import Contact from "./pages/Contact/Contact.js";
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <Router history={history}>
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Contact" component={Contact}/>
        {/* <Route exact path="/" component={WhereverYouWant}/> */}
      </Switch>
    </Router>
  );
}

export default App;
