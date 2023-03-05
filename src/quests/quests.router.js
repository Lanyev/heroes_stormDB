const router = require("express").Router();

const questServices = require("./quests.services");

router.get("/", questServices.getAllQuests);
router.get("/:id", questServices.getQuestById);
router.post("/", questServices.postNewQuest);
router.delete("/:id", questServices.deleteQuest);

module.exports = router;
