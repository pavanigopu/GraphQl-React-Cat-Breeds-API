const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const breedSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    temperament: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("CatBreed", breedSchema);