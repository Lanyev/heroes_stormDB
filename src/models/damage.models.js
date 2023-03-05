const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Damage = db.define("damage", {
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
  damageDeal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Damage;
