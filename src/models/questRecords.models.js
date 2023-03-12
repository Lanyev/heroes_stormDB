const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const QuestsRecords = db.define("questsRecords", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  questId: {
    type: DataTypes.UUID,
    allowNull: false,
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
    allowNull: true,
  },
  damageReceived: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  damageHealed: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  stacks: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  kills: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  deaths: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  //time in seconds
  time: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

module.exports = QuestsRecords;
