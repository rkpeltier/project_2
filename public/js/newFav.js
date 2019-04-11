// When user clicks on a picture
$(document).on("click", "#picture", function (event) {
  event.preventDefault();
  console.log("clicked a picture");

  // Make a favDress object
  var newFavorite = {
    user_id: $(this).data("user_id"),
    unsplash_id: $(this).data("unsplash-id"),
    url: $(this).data("url"),
    author: $(this).data("author"),
    category: $(this).data("category"),
    // created_at: $(this).data("unsplash-id",
    source: $(this).data("source")
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newFavorite)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });  
});
