const router = require("express").Router();

const heroServices = require("./heroes.services");

router.get("/", heroServices.getAllHeroes);
router.get("/:id", heroServices.getHeroById);
router.post("/", heroServices.postNewHero);
router.post("/bulk", heroServices.postNewHeroes);
router.delete("/:id", heroServices.deleteHero);

module.exports = router;
