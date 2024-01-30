const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    id: Number,
    climate: String,
    surface_water: String,
    name: String,
    diameter: String,
    rotation_period: String,
    terrain: String,
    gravity: String,
    orbital_period: String,
    population: String
});

const Planets = mongoose.model("planets", planetSchema);

module.exports = Planets;