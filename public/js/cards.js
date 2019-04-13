/* eslint-disable prettier/prettier */
/* eslint-disable indent */
$(".mapBtn").on("click", function(){
    window.location.href = "vendor-search";
})

$(".dressBtn").on("click", function(){
    window.location.href = "dress-images";

});

$(".tuxBtn").on("click", function(){
    window.location.href = "tuxedo-images";
});

$(".cakeBtn").on("click", function(){
    window.location.href = "cakes-images";
});


$("#logoutLink").on("click", function () {
    // eslint-disable-next-line prettier/prettier
    firebase.auth().signOut().then(function () {
        console.log("signout successful");
        var url = "index.html";
        $(location).attr('href', url);
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
});
