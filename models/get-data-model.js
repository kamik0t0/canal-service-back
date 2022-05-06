const DBCONNECT = require("../dbConnect.js");

module.exports = async () => {
    try {
        console.log("lalal");
        return DBCONNECT.query(`SELECT * FROM countries`);
    } catch (error) {
        console.log(error);
    }
};
