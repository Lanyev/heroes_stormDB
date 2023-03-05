const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Healed = db.define("healed", {
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
  damageHeal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Healed;
