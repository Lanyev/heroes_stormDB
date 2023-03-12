const QuestsRecords = require("../models/questRecords.models");
const uuid = require("uuid");

const findAllQuestsRecords = async () => {
  const data = await QuestsRecords.findAll();
  return data;
};

const findQuestRecordById = async (id) => {
  const data = await QuestsRecords.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createNewQuestRecord = async (questRecordObj) => {
  const newQuestRecord = {
    id: uuid.v4(),
    questId: questRecordObj.questId,
    userId: questRecordObj.userId,
    heroId: questRecordObj.heroId,
    damageDeal: questRecordObj.damageDeal,
    damageReceived: questRecordObj.damageReceived,
    damageHealed: questRecordObj.damageHealed,
    stacks: questRecordObj.stacks,
    kills: questRecordObj.kills,
    deaths: questRecordObj.deaths,
    time: questRecordObj.time,
  };
  const data = await QuestsRecords.create(newQuestRecord);
  return data;
};

const deleteQuestRecord = async (id) => {
  const data = await QuestsRecords.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllQuestsRecords,
  findQuestRecordById,
  createNewQuestRecord,
  deleteQuestRecord,
};
