
import 'bootstrap/dist/css/bootstrap.min.css';

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

//parse requests of content-type - application/json
app.use(bodyParse.json());

//parse requests of content-type - application/x-www-form-urlencorded
app.use(bodyParser.json())

//parse requests of content-type - application/w-www-form-urlencorded
app.use(bodyParser.urlencoded({ extended: true}))

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("");
});

app.get("/");

app.use(cors());

//app.listen(3000, () => {
  //console.log("Server is listening on port 3000");
//});

//set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}.');
});