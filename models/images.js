/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Favorites = sequelize.define("Favorites", {
    user_id: DataTypes.INTEGER,
    unsplash_id: DataTypes.STRING,
    url: DataTypes.STRING,
    author: DataTypes.STRING,
    category: DataTypes.STRING,
    // created_at: DataTypes.DATE,
    source: DataTypes.STRING
  });
  return Favorites;
};
