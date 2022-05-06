const Router = require("express");
const router = new Router();
const dataController = require("../controllers/get-data-controller.js");

/* GET home page. */
router.get("/", dataController);

module.exports = router;
