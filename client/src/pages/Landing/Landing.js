import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
    render () {
        return (
            <div className="container bkgd-container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto text-center">
                        <h6>Welome to</h6>
                        <h1>Allergenius</h1>
                        <h6>Allergic Reaction Logging App</h6>
                    </div>
                    <div className="button-div">
                        <Link to="/login" className="button btn btn-light btn-submit">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing