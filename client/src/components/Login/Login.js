import React from 'react';

const LoginCard = (props) => (

  // calls the login method in authentication service
  login = () => {
    this.props.auth.login()
  };
  // // calls the logout method in authentication service
  // logout = () => {
  //   this.props.auth.logout();

  <div className="card text-center">
    <div className="card-header">
      Welcome
    </div>
    <div className="card-body">
      <h5 className="card-title">You are not logged in!</h5>
      <p className="card-text">Please click below to login or sign-up.</p>
      <button
        style={{ cursor: 'pointer' }}
        onClick={this.login}
        className='btn btn-success'
          >
          Log In
        </button>
    </div>
    <div className="card-footer text-muted">
      Last Login: 2 days ago 
    </div>
  </div>
)

export default LoginCard;