import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'

class Headers extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }
    render() {
        const loginRegLink = (
            <ul className="navbar-nav d-flex">
                <li className="nav-item p-2">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item p-2">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className="navbar-nav d-flex">
                <li className="nav-item p-2">
                    <Link to="/EditProfile" className="nav-link">
                        My Profile
                    </Link>
                </li>
                <li className="nav-item p-2">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                    Logout
                    </a>
                </li>
            </ul>
        )
        const homeReactionLink = (
            <ul className="navbar-nav d-flex">
                <li className="nav-item p-2">
                    <Link to="/home" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item p-2">
                    <Link to="/reactionform" className="nav-link">
                        Add Reaction
                    </Link>
                </li>
            </ul>
        )
        return (
            <header className="navbar-head">
                <div className="container">
                    <nav className="navbar navbar-expand-md d-flex justify-content-between">
                    <div className="p-2 nav-link">
                            <a href="/">
                                <img src="./allergenius_logo.svg" height="30" alt="allergenius logo" className="mr-2" />
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
                        <div className="collapse navbar-collapse justify-content-between col-md-8 navbar-collapse-3 p-2">
                            { localStorage.usertoken ? homeReactionLink : null }
                            {localStorage.usertoken ? userLink : loginRegLink}
                        </div>
                    </nav>
                </div>
        </header>
        )
    }
}

export default withRouter(Headers)
