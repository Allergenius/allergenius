const k = kyanite

const create = user => {
  $.ajax({
    type: 'POST',
    url: '/api/users/create',
    data: {
      username_pk: user
    }
  })
    .then(response => {
      console.log('creating user')
    })
}

const exists = user => {
  $.ajax({
    type: 'GET',
    url: '/api/users'
  })
    .then(response => {
      if (k.some(x => x.username_pk === user, response)) {
        return user
      } else {
        create(user)
      }
    })
    .catch(new Error('error in exists'))
}

// Code for Auth0 - DO NOT DELETE
window.addEventListener('load', function () {
  //   var webAuth = new auth0.WebAuth({
  //     domain: 'apmtpc.auth0.com',
  //     clientID: '046ZkHPSyfy19YrgJDHsxYgeXWWsq421',
  //     responseType: 'token id_token',
  //     scope: 'openid profile',
  //     redirectUri: 'http://localhost:8080'
  //   })
  var webAuth = new auth0.WebAuth({
    domain: 'weathered-term-5968.auth0.com',
    clientID: 'pcD-yG5uu4GpBMFLHnjSbg-7lFXY3CLA',
    responseType: 'token id_token',
    scope: 'openid profile',
    redirectUri: 'https://allergenius.herokuapp.com/'
  })

// secret: kJeLRoo4koKhZ5XS40sRAZRAYcY-mLaJ9p7VngCUZNe7vzUJpfHv8txRIRm4_pWm

  var loginBtn = document.getElementById('btn-login')
  var homeDiv = document.getElementById('homeDiv')
  var profileDiv = document.getElementById('profileDiv')
  var nickname = document.getElementById('nickname')
  // var profileButton = document.getElementById('btn-profile')

  loginBtn.addEventListener('click', function (e) {
    e.preventDefault()
    webAuth.authorize()
  })

  var loginStatus = document.querySelector('.container h4')
  var loginView = document.getElementById('login-view')
  var homeView = document.getElementById('home-view')

  // buttons and event listeners
  var homeViewBtn = document.getElementById('btn-home-view')
  var logoutBtn = document.getElementById('btn-logout')

  // homeViewBtn.addEventListener('click', function () {
  //   homeView.style.display = 'block'
  //   loginView.style.display = 'none'
  // })

  logoutBtn.addEventListener('click', logout)

  function handleAuthentication() {
    webAuth.parseHash(function (err, authResult) {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = ''
        setSession(authResult)
        localStorage.nickname = authResult.idTokenPayload.nickname
        localStorage.image = authResult.idTokenPayload.picture
        exists(localStorage.nickname)
        $('#nickname').append("<a href=''localStorage.nickname + '!'")
        $('#avatar').attr('src', localStorage.image)
        loginBtn.style.display = 'none'
        homeView.style.display = 'block'
      } else if (err) {
        homeView.style.display = 'block'
        console.log(err)
      }
      displayButtons()
    })
  }

  function setSession(authResult) {
    // Set the time that the Access Token will expire at
    var expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    getProfile()
  }

  function logout() {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.clear()
    displayButtons()
  }

  function isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    var expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  function displayButtons() {
    if (isAuthenticated()) {
      loginBtn.style.display = 'none'
      homeDiv.style.display = 'none'
      profileDiv.style.display = 'block'
      // profileButton.style.display = 'block'
      logoutBtn.style.display = 'block'
      // loginStatus.innerHTML = 'You are logged in!'
    } else {
      homeDiv.style.display = 'block'
      profileDiv.style.display = 'none'
      // profileButton.style.display = 'none'
      loginBtn.style.display = 'block'
      logoutBtn.style.display = 'none'
    }
  }

  // app.js
  var userProfile

  function getProfile() {
    if (!userProfile) {
      var accessToken = localStorage.getItem('access_token')
      if (!accessToken) {
        console.log('Access Token must exist to fetch profile')
      }
      webAuth.client.userInfo(accessToken, function (err, profile) {
        if (err) {
          throw err
        }
        if (profile) {
          userProfile = profile
          displayProfile()
          getMyRecipes(userProfile)
        }
      })
    } else {
      displayProfile()
    }
  }

  function displayProfile() {
    // display the profile
    document.querySelector(
      '#profile-view .nickname'
    ).innerHTML = JSON.stringify(userProfile.nickname)

    document.querySelector(
      '#profile-view .full-profile'
    ).innerHTML = JSON.stringify(userProfile, null, 2)

    document.querySelector('#profile-view img').src = userProfile.picture
  }

  handleAuthentication()
  getProfile()

  getMyLog(userProfile)
})
