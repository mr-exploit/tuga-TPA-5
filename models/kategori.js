'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kategori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.todo, {
        sourceKey: 'id',
        foreignKey: 'kategori_id'
      })
    }
  }
  kategori.init({
    nama: DataTypes.STRING,
    deskripsi: DataTypes.STRING
  }, {
    tableName: 'kategori',
    sequelize,
    modelName: 'kategori',
  });
  return kategori;
};