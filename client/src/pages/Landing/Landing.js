import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Landing extends Component {
    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">WELCOME TO ALLERGENIUS</h1>
                    </div>
                    <Link to="/login" className="btn btn-success">
                        Login
                    </Link>
                </div>
            </div>
        )
    }
}

export default Landing