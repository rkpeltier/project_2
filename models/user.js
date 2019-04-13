module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
    name: DataTypes.STRING,
    firebase_id: DataTypes.STRING
    });
    return User;
};
