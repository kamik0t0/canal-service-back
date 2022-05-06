const getDataModel = require("../models/get-data-model.js");

module.exports = async function (req, res) {
    try {
        const result = await getDataModel();
        console.log(result);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
};
