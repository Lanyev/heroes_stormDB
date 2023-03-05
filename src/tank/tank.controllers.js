const Tank = require("../models/tanked.models");
const uuid = require("uuid");

const findAllTankEntrys = async () => {
  const data = await Tank.findAll();
  return data;
};

const createNewTankEntry = async (tankObj) => {
  const newTank = {
    id: uuid.v4(),
    userId: tankObj.userId,
    heroId: tankObj.heroId,
    tankDeal: tankObj.tankDeal,
  };
  const data = await Tank.create(newTank);
  return data;
};

const deleteTankEntry = async (id) => {
  const data = await Tank.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllTankEntrys,
  createNewTankEntry,
  deleteTankEntry,
};
