// Quick exercise
// Working on a login panel from my Bananaplate project
// http://dribbble.com/iamnbutler/projects/178899-BANANAPLATE
// $('.error-page').hide(0);

// $('.login-button , .no-access').click(function(){
//   $('.login').slideUp(500);
//   $('.error-page').slideDown(1000);
// });

// $('.try-again').click(function(){
//   $('.error-page').hide(0);
//   $('.login').slideDown(1000);
// });



function show2()
{
    var k=1;
    var username = document.getElementById("username").value;
    var password= document.getElementById("password").value;
    // alert(username+' '+password);
    // var cpassword= document.getElementById("cpassword").value;

    firebase.database().ref('User/').once('value').then(function(snapshot) {
        snapshot.forEach(function(child) {
            var m= child.val().username;
            var n= child.val().password;
            var o= child.val().cpassword;
            // alert(m + " "+ n+ " "+ o);
            if(m===username && n===password)
            {
                location.replace("reviewcomment.html")
                // document.write("User exists");
                // break;
            }
            else
            {
                
                
            }


        });
        }, function(error) {
            if (error) {
            } else {

            }
          });

}