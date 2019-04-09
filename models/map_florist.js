module.exports = function(sequelize, DataTypes) {
  var Florist = sequelize.define("map_florist", {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    type: DataTypes.STRING
  });
  return Florist;
};
