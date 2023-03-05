const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Tanked = db.define("tanked", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  heroId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  damageTank: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Tanked;
