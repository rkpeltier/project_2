var axios = require("axios");
var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Google Maps Florist
  app.get("/api/vendor-search", function(req, res) {
    db.map_florist.findAll().then(function(map) {
      res.json(map);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  //api route to get images from Unsplash.com
  app.get("/api/unsplash_images/:keyword", function(req, res) {
    var queryURL =
      "https://api.unsplash.com/search/photos?&per_page=60&query=" +
      req.params.keyword +
      "&client_id=9a85effe1f10fcad9e85e179b923e801807342ab6fb9db2a916cddc1003596ae";
    axios.get(queryURL).then(function(response) {
      console.log(queryURL);
      console.log(response);
      res.json(response.data);
    });
  });

  //api route to get images from Pixabay.com
  app.get("/api/pixabay_images/:keyword", function(req, res) {
    var queryURL =
      "https://pixabay.com/api/?key=12136200-6c56155333f1ce89480031596&q=" +
      req.params.keyword +
      "&image_type=photo&per_page=30";
    axios.get(queryURL).then(function(response) {
      console.log(queryURL);
      console.log(response);
      res.json(response.data);
    });
  });
};