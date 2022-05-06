const Router = require("express");
const router = new Router();
const dataController = require("../controllers/get-data-controller.js");

router.get("/", dataController);

module.exports = router;
