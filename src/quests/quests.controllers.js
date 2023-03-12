const Quests = require("../models/quests.models");
const uuid = require("uuid");

const findAllQuests = async () => {
  const data = await Quests.findAll();
  return data;
};

const findQuestById = async (id) => {
  const data = await Quests.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createNewQuest = async (questObj) => {
  const newQuest = {
    id: uuid.v4(),
    name: questObj.name,
    description: questObj.description,
    reward: questObj.reward,
  };
  const data = await Quests.create(newQuest);
  return data;
};

const deleteQuest = async (id) => {
  const data = await Quests.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllQuests,
  findQuestById,
  createNewQuest,
  deleteQuest,
};
