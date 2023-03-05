const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Quests = db.define("quests", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Quests;
