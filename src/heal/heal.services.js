const healController = require("./heal.controllers");
const responses = require("../utils/handleResponses");

const getAllHealEntrys = (req, res) => {
  healController
    .findAllHealEntrys()
    .then((data) => {
      responses.success({
        status: 200,
        data: data,
        message: "Getting all HealEntrys",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting all HealEntrys",
        res,
      });
    });
};

const postNewHealEntry = (req, res) => {
  const healObj = req.body;
  healController
    .createNewHealEntry(healObj)
    .then((data) => {
      responses.success({
        status: 201,
        data,
        message: "New HealEntry created",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad creating the HealEntry",
        res,
        fields: {
          userId: "User ID is required",
          heroId: "Hero ID is required",
          damageHeal: "Damage Heal is required",
        },
      });
    });
};

const deleteHealEntry = (req, res) => {
  const id = req.params.id;
  healController
    .deleteHealEntry(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Deleted HealEntry with id: ${id}`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `HealEntry with ID: ${id}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad deleting the HealEntry",
        res,
      });
    });
};

module.exports = {
  getAllHealEntrys,
  postNewHealEntry,
  deleteHealEntry,
};
