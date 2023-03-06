const Heroes = require("../models/heroes.models");
const uuid = require("uuid");

const findAllHeroes = async () => {
  const data = await Heroes.findAll();
  return data;
};

const findHeroById = async (id) => {
  const data = await Heroes.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createNewHero = async (heroObj) => {
  const newHero = {
    id: uuid.v4(),
    name: heroObj.name,
  };
  const data = await Heroes.create(newHero);
  return data;
};

const bulkCreateHeroes = async (heroObjs) => {
  return Promise.all(heroObjs.map((hero) => createNewHero(hero)));
};

const deleteHero = async (id) => {
  const data = await Heroes.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllHeroes,
  findHeroById,
  createNewHero,
  bulkCreateHeroes,
  deleteHero,
};
