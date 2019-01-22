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
                <Link to="/EditProfile" className="nav-link">
                    My Profile
                </Link>
            </li>
            <li className="nav-item">
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                <i className="cui-account-logout"> </i>Logout
                </a>
            </li>
        </ul>
    )

    return (
        <header className="bg-dark">
            <div className="container">
                <nav className="navbar navbar-expand-md no-gutters">
                <div className="col-2 content-justify-left">
                        <a href="/">
                            <img src="./allergenius_logo.svg" alt="allergenius_logo" />
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
                            <i class="cui-calendar"> </i>Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/reactionform" className="nav-link">
                            <i className="cui-plus"></i>Add Reaction
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        </div>
    </header>
    )
  }
}

export default withRouter(Headers)
