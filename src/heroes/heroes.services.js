const heroesController = require("./heroes.controllers");
const responses = require("../utils/handleResponses");

const getAllHeroes = (req, res) => {
  heroesController
    .findAllHeroes()
    .then((data) => {
      responses.success({
        status: 200,
        data: data,
        message: "Getting all Heroes",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting all heroes",
        res,
      });
    });
};

const getHeroById = (req, res) => {
  const id = req.params.id;
  heroesController
    .findHeroById(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Getting Hero with id: ${id}`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `Hero with ID: ${id}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting the hero",
        res,
      });
    });
};

const postNewHero = (req, res) => {
  const heroObj = req.body;
  heroesController
    .createNewHero(heroObj)
    .then((data) => {
      responses.success({
        status: 201,
        data,
        message: "Hero created",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad creating the hero",
        res,
      });
    });
};

const deleteHero = (req, res) => {
  const id = req.params.id;
  heroesController
    .deleteHero(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Hero with ID: ${id}, deleted`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `Hero with ID: ${id}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad deleting the hero",
        res,
      });
    });
};

module.exports = {
  getAllHeroes,
  getHeroById,
  postNewHero,
  deleteHero,
};
