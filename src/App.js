import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Switch
} from "react-router-dom";
import Home from "./components/Home";
import Api from "./components/Api";
import Contact from "./components/Contact";
 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Fun Facts About Cats & Dogs</h1>
          <ul className="header">
          <li><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/Api">Facts</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Switch>
          <Route exact path="/Home" component={Home}/>
          <Route path="/Api" component={Api}/>
          <Route path="/Contact" component={Contact}/>
          </Switch>  
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default App;