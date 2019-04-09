var LatLng = new google.maps.LatLng(38.575764, -121.478851);
var key = require("../../config/gmap_key");
var query =
  "https://maps.googleapis.com/maps/api/js?key=" +
  key +
  "&libraries=places,geometry";

$.ajax({
  url: query,
  method: GET
}).then(function(result) {
  console.log(result);
});

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: LatLng, //Bias map to Sacramento, CA
    zoom: 12
  });
}

initMap();
