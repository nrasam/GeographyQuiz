const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  console.log("Requested /");
  res.sendStatus(200);
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
