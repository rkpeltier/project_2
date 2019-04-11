var db = require("../models");

module.exports = function (app) {
  // Load index page
  // app.get("/", function (req, res) {
  //   db.Example.findAll({}).then(function (dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  //Google Maps Vendor Search
  app.get("/vendor-search", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/vendor-search.html"));
  });

  //loads weddingDress.html page
  app.get("/unsplash-dress-images", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/weddingDress.html"));
  });

  //loads cakes.html page
  app.get("/unsplash-dress-images", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/cakes.html"));
  });

  //loads tuxedo.html page
  app.get("/unsplash-dress-images", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/tuxedo.html"));
  });

  //Google Maps Page
  app.get("/vendor-search", function (req, res) {
    res.sendfile(path.join(__dirname, "../public/Vendor-Search.html"));
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function (req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function (
  //     dbExample
  //   ) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};