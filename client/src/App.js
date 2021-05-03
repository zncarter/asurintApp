import React from "react"
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from "./NavBar";
import Websites from './Websites';
import Website from "./Website";
import WebsiteEdit from "./WebsiteEdit";

function App() {
  const navbar = <NavBar/>

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/websites"/>   
        </Route>
        <Route path="/websites" exact>
          <Websites navbar={navbar}/>
        </Route>
        <Route path={`/websites/:slug`}>
          <Website/>
        </Route>
        <Route path="/new-website" exact>
          <WebsiteEdit/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
