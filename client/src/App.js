import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AlertState from './context/alert/AlertState';
import Alerts from './components/layout/Alerts';
const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home}></Route>
                  <Route path='/about' component={About}></Route>
                  <Route path='/login' component={Login}></Route>
                  <Route path='/register' component={Register}></Route>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
