const express = require("express");
const router = express.Router();

const Films = require("./models/Films");
const Planets = require("./models/Planets");
const Characters = require("./models/Characters");
const Films_Characters = require("./models/Films_Characters");
const Films_Planets = require("./models/Films_Planets");

// Get all films
router.get("/films", async (req, res) => {
    try {
        let films = await Films.find();
        res.json(films);
    } catch (error) {
        res.status(500);
    }
});

// Get film by ID
router.get("/films/:id", async (req, res) => {
    try {
        let films = await Films.find({id: req.params.id });

        if (!films) {
            return res.status(404);
        }

        res.json(films[0]);
    } catch (error) {
        res.status(500);
    }
});

// Get all characters
router.get("/characters", async (req, res) => {
    try {
        let characters = await Characters.find();
        res.json(characters);
    } catch (error) {
        res.status(500);
    }
});

// Get character by ID
router.get("/characters/:id", async (req, res) => {
    try {
        let characters = await Characters.find({id: req.params.id });

        if (!characters) {
            return res.status(404);
        }

        res.json(characters[0]);
    } catch (error) {
        res.status(500);
    }
});

// Get all planets
router.get("/planets", async (req, res) => {
    try {
        let planets = await Planets.find();
        res.json(planets);
    } catch (error) {
        res.status(500);
    }
});

// Get planet by ID
router.get("/planets/:id", async (req, res) => {
    try {
        let planets = await Planets.find({id: req.params.id });

        if (!planets) {
            return res.status(404);
        }

        res.json(planets[0]);
    } catch (error) {
        res.status(500);
    }
});

router.get("/planets/:id", async (req, res) => {
    try {
        let planets = await Planets.find({id: req.params.id });

        if (!planets) {
            return res.status(404);
        }

        res.json(planets[0]);
    } catch (error) {
        res.status(500);
    }
});

// Get film_characters by Film ID
router.get("/films/:id/characters", async (req, res) => {
    try {
        let films_characters = await Films_Characters.find({film_id: req.params.id}).lean();
        let characters = await Characters.find().lean();

        let characters_ids = films_characters.map((element) => element.character_id);
        characters = characters.filter((character) => characters_ids.includes(character.id));

        res.json(characters);
    } catch (error) {
        res.status(500);
    }
});


module.exports = router;
