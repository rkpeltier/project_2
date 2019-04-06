module.exports = function(sequelize, DataTypes) {
  var Florist = sequelize.define("map_florist", {
    name: DataTypes.STRING,
    address: DataTypes.TEXT
  });
  return Florist;
};
