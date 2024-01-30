const express = require("express");
const controller = require("./controller");
const app = express();
const PORT = 3000;
require("./db");

// API controller
app.use("/api", controller);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});







