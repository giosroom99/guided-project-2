const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    id: Number,
    name: String,
    gender: String,
    skin_color: String,
    hair_color: String,
    height: String,
    eye_color: String,
    mass: String,
    homeworld: Number,
    birth_year: String
});

const Characters = mongoose.model("characters", characterSchema);

module.exports = Characters;