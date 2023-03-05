const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const QuestUsers = db.define("questUsers", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  questId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

module.exports = QuestUsers;
