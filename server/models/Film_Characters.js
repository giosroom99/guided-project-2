const mongoose = require("mongoose");

const filmCharactersSchema = new mongoose.Schema({
  film_id: Number,
  character_id: Number,
});

const Film_Characters = mongoose.model(
  "films_characters",
  filmCharactersSchema
);

module.exports = Film_Characters;
