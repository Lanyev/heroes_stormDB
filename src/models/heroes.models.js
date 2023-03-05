const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Heroes = db.define("heroes", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Heroes;
