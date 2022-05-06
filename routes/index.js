var express = require("express");
var router = express.Router();
const getDataController = require("../controllers/get-data-controller.js");

/* GET home page. */
router.get("/", getDataController);

module.exports = router;
