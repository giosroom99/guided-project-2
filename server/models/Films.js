const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    id: Number,
    producer: String,
    title: String,
    episode_id: Number,
    director: String,
    release_date: String,
    opening_crawl: String
});

const Films = mongoose.model("films", filmSchema);

module.exports = Films;