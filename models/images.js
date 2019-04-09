module.exports = function(sequelize, DataTypes) {
  var Favorites = sequelize.define("Favorites", {
    // eslint-disable-next-line camelcase
    user_id: DataTypes.INTEGER,
    // eslint-disable-next-line camelcase
    unsplash_id: DataTypes.INTEGER,
    url: DataTypes.STRING,
    author: DataTypes.STRING,
    category: DataTypes.STRING,
    // eslint-disable-next-line camelcase
    created_at: DataTypes.DATE
  });
  return Favorites;
};
