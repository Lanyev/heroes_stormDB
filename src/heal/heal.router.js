const router = require("express").Router();

const healServices = require("./heal.services");

router.get("/", healServices.getAllHealEntrys);
router.post("/", healServices.postNewHealEntry);
router.delete("/:id", healServices.deleteHealEntry);

module.exports = router;
