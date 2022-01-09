function show3() {

    var username = document.getElementById("username").value;
    var email= document.getElementById("email").value;
    // var cpassword= document.getElementById("cpassword").value;


     firebase.database().ref('Email/' + username).set({
        username : username,
       email: email,
        // password : password
          }, function(error) {
            if (error) {
              // The write failed...
            } else {
                // alert("DONE");
                location.replace("reviewcomment.html")
              
           
            }
          });
 } 
