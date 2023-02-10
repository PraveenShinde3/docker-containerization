const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ Hello: "This is a node js app" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
