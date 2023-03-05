const questController = require("./quests.controller");
const responses = require("../utils/handleResponses");

const getAllQuests = (req, res) => {
  questController
    .findAllQuests()
    .then((data) => {
      responses.success({
        status: 200,
        data: data,
        message: "Getting all Quests",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting all quests",
        res,
      });
    });
};

const getQuestById = (req, res) => {
  const id = req.params.id;
  questController
    .findQuestById(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Getting Quest with id: ${id}`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `Quest with ID: ${id}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting the quest",
        res,
      });
    });
};

const postNewQuest = (req, res) => {
  const questObj = req.body;
  questController
    .createNewQuest(questObj)
    .then((data) => {
      responses.success({
        status: 201,
        data,
        message: "New Quest created",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad creating the quest",
        res,
      });
    });
};

const deleteQuest = (req, res) => {
  const id = req.params.id;
  questController
    .deleteQuest(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Quest with id: ${id} deleted`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `Quest with ID: ${id}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad deleting the quest",
        res,
      });
    });
};

module.exports = {
  getAllQuests,
  getQuestById,
  postNewQuest,
  deleteQuest,
};
