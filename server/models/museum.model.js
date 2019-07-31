const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const MuseumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    urlImage: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String
    }
});

module.exports = mongoose.model('Museum', MuseumSchema, 'museum');
