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
        message: "Theres a problem getting all heroes",
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
          message: `Getting Hero with name ${data.name}`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `Hero with name ${data.name}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Theres an error getting the hero",
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
        message: "Hero with the name: ${data.name} created",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad creating the hero with name: ${data.name}",
        res,
        fields: {
          name: "Name is required",
        },
      });
    });
};

const postNewHeroes = (req, res) => {
  const heroObjs = req.body;
  heroesController
    .bulkCreateHeroes(heroObjs)
    .then((data) => {
      responses.success({
        status: 201,
        data,
        message: "Heroes created",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad creating the heroes",
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
          message: `Hero with the name ${data.name} deleted`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `Hero with name ${data.name}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad deleting the hero with name: ${data.name}",
        res,
      });
    });
};

module.exports = {
  getAllHeroes,
  getHeroById,
  postNewHero,
  postNewHeroes,
  deleteHero,
};
