'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prenda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  prenda.init({
    nombre: DataTypes.STRING,
    marca: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'prenda',
  });
  return prenda;
};