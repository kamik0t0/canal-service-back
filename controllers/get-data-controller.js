const getDataModel = require("../models/get-data-model.js");

// тонкий контроллер для получения и отдачи запроса
module.exports = async function (req, res) {
    try {
        const result = await getDataModel();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
};
