const router = require("express").Router();

const damageServices = require("./damage.services");

router.get("/", damageServices.findAllDamageEntrys);
router.post("/", damageServices.createNewDamageEntry);
router.delete("/:id", damageServices.deleteDamageEntry);

module.exports = router;
