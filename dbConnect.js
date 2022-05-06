// Подключение к базе данных
const mysql = require("mysql2");

function DBCONNECT() {
    return mysql
        .createPool({
            host: "bzsnhusa3cc94sdeolgg-mysql.services.clever-cloud.com",
            port: 3306,
            user: "uhr4iunb1zlw3cpt",
            database: "bzsnhusa3cc94sdeolgg",
            password: "sIg0E4MMIJILW6EamBI1",
        })
        .promise();
}

module.exports = DBCONNECT();

/*
// Облачная
function DBCONNECT() {
    return mysql
        .createPool({
            host: "bzsnhusa3cc94sdeolgg-mysql.services.clever-cloud.com",
            port: 3306,
            user: "uhr4iunb1zlw3cpt",
            database: "bzsnhusa3cc94sdeolgg",
            password: "sIg0E4MMIJILW6EamBI1",
        })
        .promise();
}
mysql://uhr4iunb1zlw3cpt:sIg0E4MMIJILW6EamBI1@bzsnhusa3cc94sdeolgg-mysql.services.clever-cloud.com:3306/bzsnhusa3cc94sdeolgg
module.exports = DBCONNECT();

// Локальная
function DBCONNECT() {
    return mysql
        .createPool({
            host: "localhost",
            port: 3306,
            user: "root",
            database: "test_task_canalservice",
            password: "im0bilaiZER",
        })
        .promise();
}

module.exports = DBCONNECT();
*/
