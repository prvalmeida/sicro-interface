import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './Home';
import Callback from './callback';
import Auth from './auth';
import history from './history';
import ClientList from './ClientList';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  console.log("const handleAuthentication")
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
//   }
}

const Routes = () => (
  <Router history={history} component={Home}>
    <div>
      <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/callback" render={(props) => {
        console.log("Callback")
        handleAuthentication(props);
        return <Callback {...props} />
      }}/>
	  <Route path="/clients" render={(props) => <ClientList {...props} />} />
    </div>
  </Router>
);

export default Routes;