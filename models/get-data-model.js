const DBCONNECT = require("../dbConnect.js");

// простейший запрос к БД на выборку всех данных из таблицы
module.exports = async () => {
    return DBCONNECT.query(`SELECT * FROM countries`);
};
