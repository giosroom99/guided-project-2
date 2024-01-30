const mongoose = require('mongoose');

const filmPlanetsSchema = new mongoose.Schema({
    film_id: Number,
    planet_id: Number
});

const Film_Planets = mongoose.model("film_planets", filmPlanetsSchema);

module.exports = Film_Planets;