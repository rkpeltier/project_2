$(document).ready(function () {

    $("#signUpContainer").hide();
  
    var database = firebase.database();
   
    // LOG IN /////////////////////////
    $("#signInBtn").on("click", function (event) {
  
      event.preventDefault();
  
      var email = $("#emailSignIn").val();
      var password = $("#passwordSignIn").val();
  
      firebase.auth().signInWithEmailAndPassword(email, password)
  
        .then(function (user) {
  
          var url = "homepage.html";
          $(location).attr('href', url);
          localStorage.setItem("userId", user.user.uid);
          console.log(user);
  
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
  
          if (errorCode == 'auth/weak-password') {
            bootbox.alert('The password does not contain at least six characters.');
          } else {
            bootbox.alert("User does not exist. Please sign up.");
          }
  
        });
    });
  
  
  
    // SIGN UP //////////////////////
  
    $("#signUpLink").on("click", function (event) {
  
      event.preventDefault();
  
      $("#signInContainer").hide();
      $("#signUpContainer").show();
  
    });
  
    $("#signUpBtn").on("click", function (event) {
  
      event.preventDefault();
  
      var email = $("#emailSignUp").val();
      var password = $("#passwordSignUp").val();
  
      console.log(email);
  
      firebase.auth().createUserWithEmailAndPassword(email, password)
  
        .then(function (user) {
  
          var url = "homepage.html";
          $(location).attr('href', url);
  
        })
   
        .catch(function (error) {
          console.log(error);
          // Handle Errors here.
          var errorCode = error.code;
          // var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password does not contain at least six characters.');
  
          }
  
        })

        console.log(firebase.auth().currentUser);

    });

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User logged in already or has just logged in.

          console.log(user.uid);
        } else {
          // User not logged in or has just logged out.
        }
      });

    firebase.auth().currentUser
  
    
  
  });
  
  