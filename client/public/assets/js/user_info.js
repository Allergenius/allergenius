const k = kyanite

$(document).ready(function () {
  const create = user => {
    $.ajax({
      type: 'POST',
      url: '/api/users/create',
      data: {
        username_pk: localStorage.nickname
      }
    })
      .then(response => {
        console.log(response)
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
  }
  // exists(localStorage.nickname)
})
