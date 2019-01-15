import React, { Component } from 'react';
import Routes from './Routes';
import LogoutButton from './../components/Buttons/LogoutButton';
// import LoginCard from '../components/Login/Login';
// import App from './App';

class Home extends Component {
  // calls the login method in authentication service
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  
  render() {
    // calls the isAuthenticated method in authentication service
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          isAuthenticated() &&
          <div className="container column">
            <h5>
              You are logged in!{' '}
            </h5>
            <LogoutButton /> 
            <Routes />
          </div>
        }
        {
          !isAuthenticated() && (
            <div>
              {/* <div className='jumbotron jumbotron-fluid'>
                <div className='container'>
                  <h1 className='display-3 text-center'>
                    Allergenius
                  </h1>
                </div>
              </div> */}
              <div className='loginpage-container'>
                <div className='container'>
                  <h1 className='display-3 text-center'>
                    Allergenius
                  </h1>
                  <h5>
                    Food Allergen Reaction Tracker
                  </h5>
                </div>
              {/* </div>
              <div className="card text-center">
                <div className="card-header">
                  Welcome
                </div>
              <div className="card-body">
                <h5 className="card-title">You are not logged in!</h5>
                <p className="card-text">Please click below to login or sign-up.</p> */}
                <button
                  style={{ cursor: 'pointer' }}
                  onClick={this.login}
                  className='btn btn-light'
                >
                  Log In
                </button>
              </div>
              {/* <div className="card-footer text-muted">
                Last Login: 2 days ago 
              </div>
            </div> */}
          </div>
          )
        }
      </div>
      );
    }
  }

  export default Home;