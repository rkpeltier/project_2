/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
// When user clicks on a picture
$(document).on("click", "#picture", function (event)
{
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
    .then(function (data)
    {
      var url = newFavorite.url;
      var addImageDiv = $("<div>");
      var newFavImage = $("<img>")
      newFavImage.attr("src", url); //add small image source from the results
      addImageDiv.append(newFavImage); //append images to the div
      $("#saved-images").prepend(addImageDiv); //dynamically push images to the div

      //styling saved imaged in side panel
      newFavImage.addClass("mt-2 mb-2");
      newFavImage.attr("id", "small");
      // Log the data we found
      console.log(data);
    });
});

//Delete Faves
$(document).on("click", "#small", function (event)
{
  event.stopPropagation(); //method prevents propagation of the same event from being called.
  console.log("clicked a saved picture");
  
  //Ajax Delete
  $.ajax({
    method: "DELETE",
    url: "/api/faves/" + id
  }).then(function(dbFavorites){
    //some other code for the callback to delete
    //be deleted!!!

    
  });
});
