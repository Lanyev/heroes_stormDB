const Damage = require("../models/damage.models");
const uuid = require("uuid");

const findAllDamageEntrys = async () => {
  const data = await Damage.findAll();
  return data;
};

const createNewDamageEntry = async (damageObj) => {
  const newDamage = {
    id: uuid.v4(),
    userId: damageObj.userId,
    heroId: damageObj.heroId,
    damageDeal: damageObj.damageDeal,
  };
  const data = await Damage.create(newDamage);
  return data;
};

const deleteDamageEntry = async (id) => {
  const data = await Damage.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllDamageEntrys,
  createNewDamageEntry,
  deleteDamageEntry,
};
