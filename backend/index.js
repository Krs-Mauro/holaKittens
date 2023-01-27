const express = require("express");
const kittens = require("./kittens.json");
const cors = require("cors");
const app = express();
const port = 5522;

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send(kittens);
});

app.listen(port, () =>
  console.log(`App listening on http://localhost:${port}`)
);
