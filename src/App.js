import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./Routes/home";
import List from './Routes/list';
import Login from './Routes/login';
import Profile from './Routes/profile';
import Signup from './Routes/signup';
import SinglePage from './Routes/singlepage';
import NavBar from "./NavBar"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/:list">
            <List />
          </Route>
          <Route path="/:list/:handle">
            <SinglePage cantFind="/" />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );

}

export default App;
