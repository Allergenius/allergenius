import React, { Component } from 'react';
import Routes from './Routes';
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
              <button
                style={{ cursor: 'pointer' }}
                onClick={this.logout}
              >
                Log Out
              </button>.
            </h5>
            <Routes />
          </div>
        }
        {
          !isAuthenticated() && (
            <div className="container column">
              <h5
              className='display-3 d-md-flex'
              >Allergenius</h5>
              <h5>
                You are not logged in! Please{' '}
                <button
                  style={{ cursor: 'pointer' }}
                  onClick={this.login}
                  className='btn btn-primary mx-auto'
                >
                  Log In
                </button>
                {' '}to continue.
              </h5>
              {/* <h6>This is the default <b><code>Home</code></b> component. The <b><code>App</code></b> component will only be visible once you authenticate.</h6> */}
            </div>
          )
        }
      </div>
      );
    }
  }

  export default Home;