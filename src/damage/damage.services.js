const damageControllers = require("./damage.controllers");
const responses = require("../utils/handleResponses");

const findAllDamageEntrys = (req, res) => {
  damageControllers
    .findAllDamageEntrys()
    .then((data) => {
      responses.success({
        status: 200,
        data: data,
        message: "Getting all DamageEntrys",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting all DamageEntrys",
        res,
      });
    });
};

const createNewDamageEntry = (req, res) => {
  const damageObj = req.body;
  damageControllers
    .createNewDamageEntry(damageObj)
    .then((data) => {
      responses.success({
        status: 200,
        data: data,
        message: "Creating new DamageEntry",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad creating new DamageEntry",
        res,
        fields: {
          userId: "User ID is required",
          heroId: "Hero ID is required",
          damageDeal: "Damage Deal is required",
        },
      });
    });
};

const deleteDamageEntry = (req, res) => {
  const id = req.params.id;
  damageControllers
    .deleteDamageEntry(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Deleting DamageEntry with id: ${id}`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `DamageEntry with ID: ${id}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad deleting the DamageEntry",
        res,
      });
    });
};

module.exports = {
  findAllDamageEntrys,
  createNewDamageEntry,
  deleteDamageEntry,
};
