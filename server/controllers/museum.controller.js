// Load museum model
const Museum = require("./../models/museum.model");

module.exports.getMuseum = async (req, res) => {
    const museums = await Museum.find();
    res.json(museums);
};