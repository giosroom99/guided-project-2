const mongoose = require('mongoose');

const filmsCharactersSchema = new mongoose.Schema({
    film_id: Number,
    character_id: Number
});

const Films_Characters = mongoose.model("films_characters", filmsCharactersSchema);

module.exports = Films_Characters;