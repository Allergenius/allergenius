<<<<<<< HEAD
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {
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
                        User
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                {/* <a className="navbar-brand" href="">
                <img src="/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />Allergenius</a> */}
                <a className="navbar-brand" href="/">
                    <img src="../public/favicon.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                    Allergenius
                </a>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center"
                    id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

=======
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends Component {
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
                        User
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">

                <a className="navbar-brand" href="/">
                <img src="../public/favicon.png" width="30" height="30" className="d-inline-block align-top" alt="" />Allergenius</a>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center"
                    id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

>>>>>>> 7ad167951175cc5d0d9ad0fd74ddb4d02c7f45bb
export default withRouter(Navbar)