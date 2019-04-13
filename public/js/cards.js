/* eslint-disable prettier/prettier */
/* eslint-disable indent */
$(".mapBtn").on("click", function(){
    window.location.href = "../Vendor-Search.html";
})

$(".dressBtn").on("click", function(){
    window.location.href = "../weddingDress.html";

});

$(".tuxBtn").on("click", function(){
    window.location.href = "../tuxedo.html";
});

$(".cakeBtn").on("click", function(){
    window.location.href = "../cakes.html";
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
