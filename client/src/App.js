import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './auth/Home';
import Callback from './auth/Callback';
import Auth from './auth/auth';
import history from './auth/history';
import HomePage from './pages/HomePage/HomePage';
import EditProfile from './pages/Forms/EditProfile';
import AddProfile from './pages/Forms/AddProfile';
import ReactionPage from "./pages/ReactionPage/ReactionPage";
import ReactionForm from './pages/Forms/ReactionForm';
import Container from "./components/Container/Container";
import Navbar from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer"
import './assets/css/styles.css';
import './assets/css/forms.css';


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication(); 
  }
}


class App extends Component {
  render() {
    return (
      <div className="container">
        <Container>
          <Navbar />
          <Router history={history} component={Home}>
            <div>
              <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
              <Route path="/editprofile" render={(props) => <EditProfile auth={auth} {...props} />} />
              <Route path="/addprofile" render={(props) => <AddProfile auth={auth} {...props} />} />
              <Route path="/app" render={(props) => <ReactionForm auth={auth} {...props} />} />
              <Route path="/reactionform" render={(props) => <ReactionForm auth={auth} {...props} />} />
              <Route path="/reactions" render={(props) => <ReactionPage auth={auth} {...props} />} />
              <Route path="/home" render={(props) => <HomePage auth={auth} {...props} />} />
              <Route path="/callback" render={(props) => {
                handleAuthentication(props);
                return <Callback {...props} />
              }}/>
            </div>
          </Router>
          <Footer />
        </Container>
      </div> 

    );
  };
};

export default App;