const tankServices = require("./tank.controllers");
const responses = require("../utils/handleResponses");

const getAllTanksEntry = (req, res) => {
  tankServices
    .findAllTankEntrys()
    .then((data) => {
      responses.success({
        status: 200,
        data: data,
        message: "Getting all TanksEntry",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting all TanksEntry",
        res,
      });
    });
};

const postNewTankEntry = (req, res) => {
  const tankObj = req.body;
  tankServices
    .createNewTankEntry(tankObj)
    .then((data) => {
      responses.success({
        status: 201,
        data,
        message: "New TankEntry created",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad creating the TankEntry",
        res,
      });
    });
};

const deleteTankEntry = (req, res) => {
  const id = req.params.id;
  tankServices
    .deleteTankEntry(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Deleted TankEntry with id: ${id}`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          data,
          message: `TankEntry with id: ${id} not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad deleting the TankEntry",
        res,
      });
    });
};

module.exports = {
  getAllTanksEntry,
  postNewTankEntry,
  deleteTankEntry,
};
