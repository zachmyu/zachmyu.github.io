import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/Nav/NavBar';
import HomePage from './components/HomePage/Home';
import Projects from './components/Projects/MyProjects';
import Resume from './components/Resume/MyResume';
import AboutMe from './components/About/AboutMe';
import Email from './components/Email/EmailMe';


function App() {
  return (
    <h1>Zaaaaach's Paaaaage</h1>
  );
}

function App() {

  return (
    <div className="mainComponent">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route exact path='/resume'>
          <Resume />
        </Route>
        <Route exact path='/about-me'>
          <AboutMe />
        </Route>
        <Route exact path='/email'>
          <Email />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
