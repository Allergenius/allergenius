import auth0 from 'auth0-js';
import axios from "axios";
import K from "kyanite";
import history from './history';

export default class Auth {
  // Please use your own credentials here
  auth0 = new auth0.WebAuth({
    domain: 'allergenius.auth0.com',
    clientID: 'bJ4dO0c_lNC8rSxcgRDJ6tq3mfV5VLUs',
    redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://appbaseio-apps.github.io/auth0/callback',
    // audience: 'https://allergenius.auth0.com/api/v2/',
    responseType: 'token id_token',
    // scope: 'openid'
    scope: 'openid profile'
    // NOTE: how scope was written in cuiscene; profile: will request the claims representing basic profile information. These are name, family_name, given_name, middle_name, nickname, picture and updated_at.
  });

  create = user => {
    axios({
      method: 'post',
      url: '/api/users/create',
      data: {
        username_pk: user
      }
    }).then(response => {
      console.log('Creating new user')
    });
  }

  exists = user => {
    axios({
      method: 'get',
      url: '/api/users'
    }).then(response => {
      if(K.some(x => x.username_pk === user, response)) {
        return user
      } else {
        this.create(user)
      }
    })
    .catch(new Error("Error in exists function"))
  }

  login = () => {
    this.auth0.authorize();
  }

  // parses the result after authentication from URL hash
  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
      }
    });
  }

  // Sets user details in localStorage
  setSession = (authResult) => {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 100) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/home');
  }

  // removes user details from localStorage
  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/home');
  }

  // checks if the user is authenticated
  isAuthenticated = () => {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  //POTENTIAL DISPLAY FUNCTIONS (app.js)

  // userProfile;

  // getProfile = () => {
  //   if (!userProfile) {
  //     let accessToken = localStorage.getItem('access_token');
  //     if (!accessToken) {
  //       console.log('Access Token must exist to fetch profile');
  //     }
  //     webAuth.client.userInfo((accessToken, (err, profile) => {
  //       if (err) {
  //         throw err
  //       }
  //       if (profile) {
  //         userProfile = profile;
  //         displayProfile();
  //         getMyRecipes(userProfile);
  //       }
  //     })
  //   } else {
  //     displayProfile()
  //     }
  // }

  // displayProfile = () => {
  //   // display the profile
  //   document.querySelector(
  //     '#profile-view .nickname'
  //   ).innerHTML = JSON.stringify(userProfile.nickname)

  //   document.querySelector(
  //     '#profile-view .full-profile'
  //   ).innerHTML = JSON.stringify(userProfile, null, 2)

  //   document.querySelector('#profile-view img').src = userProfile.picture
  // }

  // handleAuthentication()
  // getProfile()

  // getMyLog(userProfile)
}