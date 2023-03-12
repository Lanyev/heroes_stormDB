const questRecordController = require("./questRecords.controllers");
const responses = require("../utils/handleResponses");

const getAllQuestRecords = (req, res) => {
  questRecordController
    .findAllQuestsRecords()
    .then((data) => {
      responses.success({
        status: 200,
        data: data,
        message: "Getting all Quest Records",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something went bad getting all quest records",
        res,
      });
    });
};

const getQuestRecordById = (req, res) => {
  const id = req.params.id;
  questRecordController
    .findQuestRecordById(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Getting Quest Record with id: ${id}`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `Quest Record with ID: ${id}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting the quest record",
        res,
      });
    });
};

const postNewQuestRecord = (req, res) => {
  const questRecordObj = req.body;
  questRecordController
    .createNewQuestRecord(questRecordObj)
    .then((data) => {
      responses.success({
        status: 201,
        data,
        message: "Quest Record created successfully",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something went bad creating the quest record",
        res,
        fields: {
          questId: "Quest ID is required",
          userId: "User ID is required",
          heroId: "Heroe ID is required",
          damageDeal: "Damage Deal is optional",
          damageReceived: "Damage Received is optional",
          damageHealed: "Damage Healed is optional",
          stacks: "Stacks is optional",
          kills: "Kills is optional",
          deaths: "Deaths is optional",
          time: "Time is optional (in seconds)",
        },
      });
    });
};

const deleteQuestRecord = (req, res) => {
  const id = req.params.id;
  questRecordController
    .deleteQuestRecord(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Quest Record with ID: ${id}, deleted successfully`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `Quest Record with ID: ${id}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something went bad deleting the quest record",
        res,
      });
    });
};

module.exports = {
  getAllQuestRecords,
  getQuestRecordById,
  postNewQuestRecord,
  deleteQuestRecord,
};
