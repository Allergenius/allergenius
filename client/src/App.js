import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Headers from './components/Navbar2'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import HomePage from './pages/HomePage/HomePage'
import AddProfile from './pages/AddProfile/AddProfile'
import EditProfile from './pages/EditProfile/EditProfile'
import ReactionForm from './pages/ReactionForm/ReactionForm'
import ReactionPage from './pages/ReactionPage/ReactionPage'

import './assets/css/style.css';
import './assets/css/forms.css';
// import '@coreui/icons';


class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
      
          <Headers />

          <Route exact path="/" component={Landing} />
          <div className="container mx-auto">
          <Route exact path="/home" component={HomePage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/addprofile" component={AddProfile} />
            <Route exact path="/editprofile" component={EditProfile} />
            <Route exact path="/reactionform" component={ReactionForm} />
            <Route path="/reactions" component={ReactionPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
