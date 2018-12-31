import React from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './Home';
import Callback from './Callback';
import Auth from './auth';
import history from './history';
import App from '../App';
import HomePage from '../pages/HomePage/HomePage';
import ReactionForm from '../pages/Forms/ReactionForm';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication(); 
  }
}

const Routes = () => (
  <Router history={history} component={Home}>
    <div>
      <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
      <Route path="/App" render={(props) => <App auth={auth} {...props} />} />
      <Route path="/ReactionForm" render={(props) => <ReactionForm auth={auth} {...props} />} />
      <Route path="/home" render={(props) => <HomePage auth={auth} {...props} />} />
      <Route path="/callback" render={(props) => {
        handleAuthentication(props);
        return <Callback {...props} />
      }}/>
    </div>
  </Router>
);

export default Routes;