import React, { Component } from 'react'
import { login } from '../../components/UserFunctions'
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {

            if (res) {
                this.props.history.push(`/home`)
            } else {
                console.log("user error Login page" + res)
                alert("User does not exist! Please register to login")
            }
        })
    }

    render () {
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-12 login-header text-center pt-4">ALLERGENIUS</div>
            </div>
                <div className="row">
                    <div className="mx-auto">
                        <form noValidate onSubmit={this.onSubmit} className="login-form border border-secondary bg-light">
                        <div className="header-1 text-center mb-4">Log In</div>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="email">Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="sr-only" htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <Link className="registerLink" to="/register">Not already a user? Click here to register</Link>
                            <div className="button-div">
                                <button type="submit"
                                    className="btn btn-secondary btn-login btn-custom">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login