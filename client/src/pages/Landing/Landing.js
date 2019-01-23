import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
    render () {
    return (
        <div className="container">
            <div className="row landing-container">
            <div className="mx-auto">
                <div className="landing-text">
                    <h6 className="landing-text">Welome to</h6>
                    <h1 className="header-1">Allergenius</h1>
                    <h6 className="landing-text">Allergic Reaction Logging App</h6>
                </div>
                <div className="text-center">
                <Link to="/login" className="btn btn-secondary login-button w-50">
                    Login
                </Link>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default Landing