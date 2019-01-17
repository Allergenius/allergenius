import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './auth/Home';
import Callback from './auth/Callback';
import Auth from './auth/auth';
import history from './auth/history';
import HomePage from './pages/HomePage/HomePage';
import EditProfile from './pages/Forms/EditProfile';
import AddProfile from './pages/Forms/AddProfile';
import ReactionPage from "./pages/ReactionPage/ReactionPage";
import ReactionForm from './pages/Forms/ReactionForm';
import Container from "./components/Container/Container";
import './assets/css/styles.css';
import './assets/css/forms.css';


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication(); 
  }
}

class App extends Component {
  state = {
    navCollapsed: true
  }

  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed })
  }

  render() {
   //const { isAuthenticated } = this.props.auth;
    const {navCollapsed} = this.state;

    return (
      <div className="container">
      {/* {
        false && */}
        <Container>
          <nav className='navbar fixed-top navbar-light narbar-expand-lg'>
            <div className='navbar-header' style={{ width: "100%"}}>
              <a className='navbar-brand' href='/home'>
                Allergenius
              </a>
              <button
                aria-expanded='false'
                aria-label="Toggle navigation"
                aria-controls="navbarTogglerDemo02"
                data-target="navbarTogglerDemo02"
                data-toggle="collapse"
                className="navbar-toggler ml-auto hidden-sm-up float-xs-right"
                // className='navbar-toggler ml-auto'
                onClick={this._onToggleNav}
                type='button'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
            </div>
            <div
              className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse navbarTogglerDemo02'}
              >
              <ul className='nav navbar-nav navbar-right'>
                <li className="nav-item">
                  <a href="/app">Add Reaction</a>
                </li>
                <li className="nav-item">
                  <a href="/editprofile">Update Profile</a>
                </li>
                <li className="nav-item">
                  <a href="/">Logout</a>
                </li>
              </ul>
            </div>
          </nav>

          <Router history={history} component={Home}>
            <div>
              <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
              <Route path="/editprofile" render={(props) => <EditProfile auth={auth} {...props} />} />
              <Route path="/addprofile" render={(props) => <AddProfile auth={auth} {...props} />} />
              <Route path="/app" render={(props) => <ReactionForm auth={auth} {...props} />} />
              <Route path="/reactionform" render={(props) => <ReactionForm auth={auth} {...props} />} />
              <Route path="/reactions" render={(props) => <ReactionPage auth={auth} {...props} />} />
              <Route path="/home" render={(props) => <HomePage auth={auth} {...props} />} />
              <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} />
              }}/>
            </div>
          </Router>
        </Container>
      {/* }{
        true &&
      <div className="container">
        <Container>
          <Router history={history} component={Home}>
            <div>
              <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
              <Route path="/editprofile" render={(props) => <EditProfile auth={auth} {...props} />} />
              <Route path="/addprofile" render={(props) => <AddProfile auth={auth} {...props} />} />
              <Route path="/app" render={(props) => <ReactionForm auth={auth} {...props} />} />
              <Route path="/reactionform" render={(props) => <ReactionForm auth={auth} {...props} />} />
              <Route path="/reactions" render={(props) => <ReactionPage auth={auth} {...props} />} />
              <Route path="/home" render={(props) => <HomePage auth={auth} {...props} />} />
              <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} />
              }}/>
            </div>
          </Router>
        </Container>
      </div> */}
      </div> 

    );
  };
};

export default App;