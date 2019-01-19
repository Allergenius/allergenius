import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
    render () {
    return (
            <div className="landing-container mt-5">
                <div className="landing-text">
                    <h6>Welome to</h6>
                    <h1>Allergenius</h1>
                    <h6>Allergic Reaction Logging App</h6>
                </div>
                <Link to="/login" className="btn btn-secondary login-button">
                    Login
                </Link>
            </div>
        )
    }
}

export default Landing