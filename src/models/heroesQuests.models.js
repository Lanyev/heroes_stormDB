const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Quests = db.define("quests", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  heroId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  questId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

module.exports = Quests;
