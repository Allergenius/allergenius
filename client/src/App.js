import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './components/Profile'
import HomePage from './pages/HomePage/HomePage'
import AddProfile from './pages/AddProfile/AddProfile'
import EditProfile from './pages/EditProfile/EditProfile'
import ReactionForm from './pages/ReactionForm/ReactionForm'
import ReactionPage from './pages/ReactionPage/ReactionPage'


class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <Navbar clickAdd={this.clickAdd} clickEdit={this.clickEditProfile}/>
          <Route exact path="/" component={Landing} />
          <div className="container">
          <Route exact path="/home" component={HomePage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/addprofile" component={AddProfile} />
            <Route exact path="/editprofile" component={EditProfile} />
            <Route exact path="/reactionform" component={ReactionForm} />
            <Route exact path="/reactions" component={ReactionPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
