const DBCONNECT = require("../dbConnect.js");

module.exports = async () => {
    try {
        return DBCONNECT.query(`SELECT * FROM countries`);
    } catch (error) {
        console.log(error);
    }
};
