import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Greet from '../Greet/Greet';
import Home from '../Home/Home';
import Login from '../Login/Login';
import SessionDemo from '../SessionDemo/SessionDemo';
import useToken from './useToken';


function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <Header />
      <BrowserRouter>
        <Link to="/home">
          <button id="home" className="btn">Go to home</button>
        </Link>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/greet">
            <Greet />
          </Route>
          <Route exact path="/session-demo">
            <SessionDemo />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;