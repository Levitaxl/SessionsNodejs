'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    aboutMe: DataTypes.TEXT,
    residence: DataTypes.STRING,
    web: DataTypes.STRING,
    rol: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasOne(models.developer, { foreignKey: 'userId' });
  };
  return User;
};