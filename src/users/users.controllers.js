const Users = require("../models/users.models");
const uuid = require("uuid");

const findAllUser = async () => {
  const data = await Users.findAll();
  return data;
};

const findUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createNewUser = async (userObj) => {
  const newUser = {
    id: uuid.v4(),
    nickName: userObj.nickName,
  };
  const data = await Users.create(newUser);
  return data;
};

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllUser,
  findUserById,
  createNewUser,
  deleteUser,
};
