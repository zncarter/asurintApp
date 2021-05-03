import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import axios from "axios"
import './App.css';
import Websites from './Websites';
import NavBar from "./NavBar";

function App() {
  const navbar = <NavBar/>

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/websites"/>   
        </Route>
        <Route exact path="/websites">
          <Websites navbar={navbar}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
