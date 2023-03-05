const usersControllers = require("./users.controllers");
const responses = require("../utils/handleResponses");

const getAllUsers = (req, res) => {
  usersControllers
    .findAllUser()
    .then((data) => {
      responses.success({
        status: 200,
        data: data,
        message: "Getting all Users",
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting all users",
        res,
      });
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  usersControllers
    .findUserById(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `Getting User with id: ${id}`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          message: `User with ID: ${id}, not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Something bad getting the user",
        res,
      });
    });
};

const postNewUser = (req, res) => {
  const userObj = req.body;
  usersControllers
    .createNewUser(userObj)
    .then((data) => {
      responses.success({
        status: 201,
        data,
        message: `User created succesfully with id: ${data.id}`,
        res,
      });
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: "Error ocurred trying to create a new user",
        res,
        fields: {
          nickName: "String",
        },
      });
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;

  usersControllers
    .deleteUser(id)
    .then((data) => {
      if (data) {
        responses.success({
          status: 200,
          data,
          message: `User with id: ${id} deleted successfully`,
          res,
        });
      } else {
        responses.error({
          status: 404,
          data: err,
          message: `The user with ID ${id} not found`,
          res,
        });
      }
    })
    .catch((err) => {
      responses.error({
        status: 400,
        data: err,
        message: `Error ocurred trying to delete user with id ${id}`,
        res,
      });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  postNewUser,
  deleteUser,
};
