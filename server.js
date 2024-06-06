const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.set("trust proxy", true);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.post("/crash", (req, res) => {
  const { mod } = req.body;
  const { ip } = req;
  const host = req.get("host");
  console.log(`1Received mod value from ${ip}* ${host} :`, mod);
  res.send("Mod value is validated");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
