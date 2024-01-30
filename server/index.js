const express = require("express");
const cors = require("cors");
const controller = require("./controller");
const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "*", //Place orgin URL here for cors
    credentials: true,
    preflightContinue: true,
  })
);

require("./db");

// API controller
app.use("/api", controller);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});







