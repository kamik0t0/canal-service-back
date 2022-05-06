const DBCONNECT = require("../dbConnect.js");

module.exports = async () => {
    return DBCONNECT.query(`SELECT * FROM countries`);
};
