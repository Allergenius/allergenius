import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
// import Iframe from 'react-iframe';


class Headers extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    
  render() {
    const loginRegLink = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/login" className="nav-link">
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link">
                    Register
                </Link>
            </li>
        </ul>
    )
    const userLink = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/profile" className="nav-link">
                    My Profile
                </Link>
            </li>
            <li className="nav-item">
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                    Logout
                </a>
            </li>
        </ul>
    )

    return <header className="bg-dark">
  <div className="container">
    <nav className="navbar navbar-expand-md no-gutters">
        {/* <a className="navbar-brand navbar-brand-logo" href="#">
            <div className="logo">
            <img src="https://s3.amazonaws.com/creativetim_bucket/new_logo.png">
            </div>
            <div class="brand"> Creative Tim </div>
              </a> */}
      <div className="col-2 text-left">
        <a href="/">
          <img src="../../public/favicon.png" height="40" alt="allergenius_logo" />
          Allergenius
        </a>
      </div>

      <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target=".navbar-collapse-3" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      

      <div className="collapse navbar-collapse justify-content-center col-md-8 navbar-collapse-3">
          <ul className="navbar-nav justify-content-center">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
            {localStorage.usertoken ? userLink : loginRegLink}
        </div>
    </nav>
  </div>
</header>

  }
}

export default withRouter(Headers)
