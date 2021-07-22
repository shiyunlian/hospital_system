
import 'bootstrap/dist/css/bootstrap.min.css';

const express = require("express");
const cors = require("cors");
const app = express();

app.get("/", (req, res) => {
  res.send("");
});

app.get("/");

app.use(cors());

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
