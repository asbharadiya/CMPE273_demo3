import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import * as actions from './actions';
import Landing from './components/landing/landing';
import Dashboard from './components/dashboard/dashboard';
import Account from './components/dashboard/account';

class App extends Component {

  componentWillMount(){
    this.props.checkSession();
  }

  render() {
    const isLogged = this.props.isLogged;
    return (
      <div>
      {
        isLogged === undefined ? (
          <div className="text-center"><h1>Loading...</h1></div>
        ) : (
          <BrowserRouter>
            <Switch>
              <Route exact path='/' render={() => (
                isLogged ? (
                  <Redirect to="/account"/>
                ) : (
                  <Landing/>
                )
              )}/>
              <Dashboard>
                <Route path='/account' render={() => (
                  !isLogged ? (
                    <Redirect to="/"/>
                  ) : (
                    <Account/>
                  )
                )}/>
              </Dashboard>
            </Switch>
          </BrowserRouter>
        )
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {isLogged:state.isLogged};
}

function mapDispatchToProps(dispatch) {
    return {
        checkSession : () => dispatch(actions.checkSession())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
