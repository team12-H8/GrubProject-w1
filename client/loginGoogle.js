function onSignIn(googleUser) {
    // var profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present. 
    var id_token = googleUser.getAuthResponse().id_token 
    //console.log(id_token)
    $.ajax({ 
        url :'http://localhost:3000/user/googleLogin',
        method : 'POST',
        data : { 
            googleToken : id_token
        }
    }) 
    .done((response) => { 
        console.log(response,'<<< dari done sign google')
    }) 
    .fail ((err) => { 
        console.log(err, '<<< dari err sign google')
    })
}

