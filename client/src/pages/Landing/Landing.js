import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
    render () {
    return (
            <div className="landing-container mt-5">
                <div className="landing-text">
                    <h6 className="landing-text">Welome to</h6>
                    <h1 className="header-1">Allergenius</h1>
                    <h6 className="landing-text">Allergic Reaction Logging App</h6>
                </div>
                <Link to="/login" className="btn btn-secondary login-button btn-custom">
                    Login
                </Link>
            </div>
        )
    }
}

export default Landing