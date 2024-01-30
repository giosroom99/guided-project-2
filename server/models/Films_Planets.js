const mongoose = require('mongoose');

const filmsPlanetsSchema = new mongoose.Schema({
    film_id: Number,
    planet_id: Number
});

const Films_Planets = mongoose.model("films_planets", filmsPlanetsSchema);

module.exports = Films_Planets;