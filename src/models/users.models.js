const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Users = db.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  nickName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Users;
