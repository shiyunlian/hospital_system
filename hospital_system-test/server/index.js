const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const oracledb = require('oracledb');
const app = express();
const dbConnect = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/", (req, res) => {
  res.send("Welcome to the server");
});



app.use(cors());

app.post('/login', async (req, res, next) =>{
  let username = req.body.username;
  let password = req.body.password;

  let connection = await  dbConnect();
  const result =  await connection.execute(`SELECT * FROM staff WHERE username = '${username}' AND password = '${password}' LIMIT = 1`);

  console.log(result);
  if(result.rows > 0) {
    return res.status(200).send({'message': 'Login success'})
  }else {
    return res.status(401).send({"message": "username or password not correct"})
  }

  // if (username === 'ADMIN' && password === '123') {
  //   return res.status(200).send({'message': 'success', 'token':'457589878'})
  // }else {
  //   return res.status(401).send({"message": "username or password not correct"})
  // }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
