$(document).ready(function () {

    const checkUser = x => {
        if (!k.or(k.isEmpty(x.nickname), k.isEmpty(x.image))) {
            $('#nickname').append(x.nickname + '!')
            $('#avatar').attr('src', x.image)
        }
    }
    checkUser(localStorage)
})