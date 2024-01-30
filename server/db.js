const mongoose = require("mongoose");
const mongo_uri = "mongodb://127.0.0.1:27017/swapi";

// Connect to MongoDB
mongoose.connect(mongo_uri)
.then(() => console.log("Connected to MongoDB Database"))
.catch((error) => console.error("Error connecting to MongoDB: ", error));