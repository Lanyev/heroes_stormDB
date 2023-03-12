const router = require("express").Router();

const questRecordsServices = require("./questRecords.services");

router.get("/", questRecordsServices.getAllQuestRecords);
router.get("/:id", questRecordsServices.getQuestRecordById);
router.post("/", questRecordsServices.postNewQuestRecord);
router.delete("/:id", questRecordsServices.deleteQuestRecord);

module.exports = router;
