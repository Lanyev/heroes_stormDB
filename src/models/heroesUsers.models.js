const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const HeroesUsers = db.define("heroesUsers", {
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
});

module.exports = HeroesUsers;
