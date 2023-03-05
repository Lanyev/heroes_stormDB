const router = require("express").Router();

const tankServices = require("./tank.services");

router.get("/", tankServices.getAllTanksEntry);
router.post("/", tankServices.postNewTankEntry);
router.delete("/:id", tankServices.deleteTankEntry);

module.exports = router;
