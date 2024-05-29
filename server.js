const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post("/crypto", (req, res) => {
  const { mod } = req.body;
  console.log("Received mod value:", mod);
  res.send("Mod value received");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
