'use strict';
module.exports = (sequelize, DataTypes) => {
  const developer = sequelize.define('developer', {
    workHours: DataTypes.INTEGER,
    developerType: DataTypes.STRING,
    expierece: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  developer.associate = function(models) {
    // associations can be defined here
  };
  return developer;
};