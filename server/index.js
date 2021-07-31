const express = require("express");
const cors = require("cors");
const app = express();
const oracledb = require("oracledb");

oracledb.getConnection(
  {
    user: process.env.EECS_USER, 
    password: process.env.EECS_PASSWORD,
    connectString: 'dbaccess'
  }, 
  function(err, connection) {
    if (err) {error = err; return;}
    
    connection.execute('select user from dual', [], function(err, result) {
      if (err) {error = err; return;}

      user = result.rows[0][0];
      error = null;

      connection.close(function(err) {
        if (err) {console.log(err);}
      });
    })
  }
);

http.createServer(function(request, response) {
response.writeHead(200, {'Content-Type': 'text/plain'});

if (error === null) {
  response.end('Connection test succeeded. You connected to Exadata Express as ' + user + '!');
} else if (error instanceof Error) {
  response.write('Connection test failed. Check the settings and redeploy app!\n');
  response.end(error.message);
} else {
  response.end('Connection test pending. Refresh after a few seconds...');
}
}).listen(process.env.PORT);

app.get("/", (req, res) => {
  res.send("");
});

app.get("/");

app.use(cors());

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
