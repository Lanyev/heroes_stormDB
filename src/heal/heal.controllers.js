const Heal = require("../models/healed.models");
const uuid = require("uuid");

const findAllHealEntrys = async () => {
  const data = await Heal.findAll();
  return data;
};

const createNewHealEntry = async (healObj) => {
  const newHeal = {
    id: uuid.v4(),
    userId: healObj.userId,
    heroId: healObj.heroId,
    healDeal: healObj.healDeal,
  };
  const data = await Heal.create(newHeal);
  return data;
};

const deleteHealEntry = async (id) => {
  const data = await Heal.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllHealEntrys,
  createNewHealEntry,
  deleteHealEntry,
};
