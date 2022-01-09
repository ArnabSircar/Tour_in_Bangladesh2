function show() {

    var username = document.getElementById("username").value;
    var password= document.getElementById("password").value;
    var cpassword= document.getElementById("cpassword").value;


     firebase.database().ref('User/' + username).set({
        username : username,
        password: password,
        password : password
          }, function(error) {
            if (error) {
              // The write failed...
            } else {
                // alert("DONE");
                location.replace("reviewcomment.html")
              
           
            }
          });
 } 
