/* eslint-disable camelcase */
var axios = require("axios");
var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  // Google Maps Florist
  app.get("/api/map_florist", function (req, res) {
    var queryMap =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAuj7-rya5ihyYip8P-AMJjAnWpOHl_PaM&libraries=places,geometry";
    axios.get(queryMap).then(function (response) {
      console.log(response);
      console.log(queryMap);
      res.json(response.data);
    });
    db.map_florist.findAll({}).then(function (florist) {
      res.json(florist);
    });
  });

  //api route to get images from Unsplash.com
  app.get("/api/unsplash_images/:keyword", function (req, res) {
    var queryURL =
      "https://api.unsplash.com/search/photos?&per_page=60&query=" +
      req.params.keyword +
      "&client_id=9a85effe1f10fcad9e85e179b923e801807342ab6fb9db2a916cddc1003596ae";
    axios.get(queryURL).then(function (response) {
      console.log(queryURL);
      console.log(response);
      res.json(response.data);
    });
  });

  //api route to get images from Pixabay.com
  app.get("/api/pixabay_images/:keyword", function (req, res) {
    var queryURL =
      "https://pixabay.com/api/?key=12136200-6c56155333f1ce89480031596&q=" +
      req.params.keyword +
      "&image_type=photo&per_page=36";
    axios.get(queryURL).then(function (response) {
      console.log(queryURL);
      console.log(response);
      res.json(response.data);
    });
  });

  //api route to post new images to Favorites table
  app.post("/api/new", function (req, res) {
    console.log("Image Data");
    // console.log(req.body);
    db.Favorites.create({
      user_id: req.body.user_id,
      unsplash_id: req.body.unsplash_id,
      url: req.body.url,
      author: req.body.author,
      category: req.body.category,
      // created_at: req.body.created_at,
      source: req.body.source
    }).then(function (results) {
      res.json(results);
    });
  });

  //api route to delete a saved image from the database
  app.delete("/api/delete/:id", function (req, res) {
    db.Favorites.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  // Get all pictures from users saved images
  app.get("/api/faves/:category", function(req, res) {
    db.Favorites.findAll({ where: { category: req.params.category } }).then(
      function(data) {
        return res.json(data);
      }
    );
  });
};
