function show() {

    var username = document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var subject= document.getElementById("subject").value;
    var message=document.getElementById("message").value;


     firebase.database().ref('Contact/' + username).set({
        username : username,
        email: email,
        subject : subject,
        message:message
          }, function(error) {
            if (error) {
              // The write failed...
            } else {
                 alert("DONE");
                // location.replace("reviewcomment.html")
              
           
            }
          });
 } 
