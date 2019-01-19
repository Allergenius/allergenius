import React, { Component } from 'react'
import { login } from '../../components/UserFunctions'

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
                alert("User does not exist! Please register to login")
            }
        })
    }

    render () {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            {/* <h1 className="h2 mb-3 font-weight-bold">Please sign in</h1> */}
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
                            <button type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Sign in
                            </button>
                            <br />
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login