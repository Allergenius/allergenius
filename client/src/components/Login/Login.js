import React from 'react';

const LoginCard = (props) => (

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
        className='btn btn-primary mx-1'
      >
        Log In
      </button>
  </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>
)

export default LoginCard;