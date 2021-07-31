const express = require("express");
const cors = require("cors");
const app = express();
const oracledb = require("oracledb");
const connAttrs = {
  user: "ADMIN",
  password: "13544402356Seven",
  connectionString: "ADWFINANCE_high",
};

app.use(cors());
app.use(express.json());

// configure proper initOracleClient based on platform
if (process.platform === "win32") {
  // Windows
  oracledb.initOracleClient({ libDir: "C:\\oracle\\instantclient_19_11" });
} else if (process.platform === "darwin") {
  // macOS
  oracledb.initOracleClient({
    libDir: process.env.HOME + "/Downloads/instantclient_19_8",
  });
}

// Http Method: GET
// URI: /patients
// Read all the patients records
app.get("/patients", (req, res) => {
  oracledb.getConnection(connAttrs, (err, connection) => {
    if (err) {
      // Error connecting to DB
      res.set("Content-Type", "application/json");
      res.status(500).send(
        JSON.stringify({
          status: 500,
          message: "Error connecting to DB",
          detailed_message: err.message,
        })
      );
      return;
    }
    connection.execute(
      "select * from patient",
      {},
      {
        outFormat: oracledb.OBJECT,
      },
      (err, result) => {
        if (err) {
          res.set("Content-Type", "application/json");
          res.status(500).send(
            JSON.stringify({
              status: 500,
              message: "Error getting the patient info",
              detailed_message: err.message,
            })
          );
        } else {
          res.contentType("application/json").status(200);
          res.send(JSON.stringify(result.rows));
        }
        if (connection) {
          try {
            connection.close();
            console.log("close connection success");
          } catch (err) {
            console.error(err.message);
          }
        }
      }
    );
  });
});

// Http method: GET
// URI: /patients/:patientId
// Read the patient record given in :patientId
app.get("/patients/:patientId", (req, res) => {
  oracledb.getConnection(connAttrs, (err, connection) => {
    if (err) {
      // Error connecting to DB
      res.set("Content-Type", "application/json");
      res.status(500).send(
        JSON.stringify({
          status: 500,
          message: "Error connecting to DB",
          detailed_message: err.message,
        })
      );
      return;
    }

    connection.execute(
      "select * from patient where patientId =:patientId",
      [req.params.patientId],
      {
        outFormat: oracledb.OBJECT,
      },
      (err, result) => {
        if (err || result.rows.length < 1) {
          res.set("Content-Type", "application/json");
          var status = err ? 500 : 404;
          res.status(status).send(
            JSON.stringify({
              status: status,
              message: err
                ? "Error getting the patient record"
                : "Patient doesn't exist",
              detailed_message: err ? err.message : "",
            })
          );
        } else {
          res
            .contentType("application/json")
            .status(200)
            .send(JSON.stringify(result.rows));
        }
        if (connection) {
          try {
            connection.close();
            console.log("close connection success");
          } catch (err) {
            console.error(err.message);
          }
        }
      }
    );
  });
});

// Http method: POST
// URI: /patients
// Creates a new patient
app.post("/patients", (req, res) => {
  if ("application/json" !== req.get("Content-Type")) {
    res
      .set("Content-Type", "application/json")
      .status(415)
      .send(
        JSON.stringify({
          status: 415,
          message: "Wrong content-type. Only application/json is supported",
          detailed_message: null,
        })
      );
    return;
  }

  oracledb.getConnection(connAttrs, (err, connection) => {
    if (err) {
      // Error connecting to DB
      res.set("Content-Type", "application/json");
      res.status(500).send(
        JSON.stringify({
          status: 500,
          message: "Error connecting to DB",
          detailed_message: err.message,
        })
      );
      return;
    }
    connection.execute(
      "insert into patient values (:patientId, :firstName, :lastName, :dob, :gender, :diagnosis, : hospitalizedDate, :dischargedDate,:billId) ",
      [
        req.body.patientId,
        req.body.firstName,
        req.body.lastName,
        req.body.dob,
        req.body.gender,
        req.body.diagnosis,
        req.body.hospitalizedDate,
        req.body.dischargedDate,
        req.body.billId,
      ],
      {
        autoCommit: true,
        outFormat: oracledb.OBJECT, // Return the result as Object
      },
      (err, result) => {
        if (err) {
          // Error
          res.set("Content-Type", "application/json");
          res.status(400).send(
            JSON.stringify({
              status: 400,
              message:
                err.message.indexOf("ORA-00001") > -1
                  ? "patient already exists"
                  : "Input Error",
              detailed_message: err.message,
            })
          );
        } else {
          // Successfully created the resource
          res
            .status(201)
            .set("Location", "/patients/" + req.body.patientId)
            .end();
        }
        if (connection) {
          try {
            connection.close();
            console.log("close connection success");
          } catch (err) {
            console.error(err.message);
          }
        }
      }
    );
  });
});

// Build UPDATE statement and prepare bind variables
const buildUpdateStatement = (req) => {
  var statement = "",
    bindValues = {};
  if (req.body.firstName) {
    if (statement) statement = statement + ", ";
    statement += "firstName = :firstName";
    bindValues.firstName = req.body.firstName;
  }
  if (req.body.lastName) {
    if (statement) statement = statement + ", ";
    statement += "lastName = :lastName";
    bindValues.lastName = req.body.lastName;
  }

  if (req.body.gender) {
    if (statement) statement = statement + ", ";
    statement += "gender = :gender";
    bindValues.gender = req.body.gender;
  }
  if (req.body.dob) {
    if (statement) statement = statement + ", ";
    statement += "dob = :dob";
    bindValues.dob = req.body.dob;
  }
  if (req.body.diagnosis) {
    if (statement) statement = statement + ", ";
    statement += "diagnosis = :diagnosis";
    bindValues.diagnosis = req.body.diagnosis;
  }
  if (req.body.hospitalizedDate) {
    if (statement) statement = statement + ", ";
    statement += "hospitalizedDate = :hospitalizedDate";
    bindValues.hospitalizedDate = req.body.hospitalizedDate;
  }
  if (req.body.hospitalizedDate) {
    if (statement) statement = statement + ", ";
    statement += "hospitalizedDate = :hospitalizedDate";
    bindValues.hospitalizedDate = req.body.hospitalizedDate;
  }
  if (req.body.billId) {
    if (statement) statement = statement + ", ";
    statement += "billId = :billId";
    bindValues.billId = req.body.billId;
  }

  statement += " where patientId = :patientId";
  bindValues.patientId = req.params.patientId;
  statement = "update patient set " + statement;

  return {
    statement: statement,
    bindValues: bindValues,
  };
};

// Http method: PUT
// URI: /patients/:patientId
// Update the patient info given in :patientId
app.put("/patients/:patientId", (req, res) => {
  if ("application/json" !== req.get("Content-Type")) {
    res
      .set("Content-Type", "application/json")
      .status(415)
      .send(
        JSON.stringify({
          status: 415,
          message: "Wrong content-type. Only application/json is supported",
          detailed_message: null,
        })
      );
    return;
  }

  oracledb.getConnection(connAttrs, (err, connection) => {
    if (err) {
      // Error connecting to DB
      res.set("Content-Type", "application/json");
      res.status(500).send(
        JSON.stringify({
          status: 500,
          message: "Error connecting to DB",
          detailed_message: err.message,
        })
      );
      return;
    }
    var updateStatement = buildUpdateStatement(req);
    connection.execute(
      updateStatement.statement,
      updateStatement.bindValues,
      {
        autoCommit: true,
        outFormat: oracledb.OBJECT, // Return the result as Object
      },
      (err, result) => {
        if (err || result.rowsAffected === 0) {
          // Error
          res.set("Content-Type", "application/json");
          res.status(400).send(
            JSON.stringify({
              status: 400,
              message: err ? "Input Error" : "Patient doesn't exist",
              detailed_message: err ? err.message : "",
            })
          );
        } else {
          // Resource successfully updated. Sending an empty response body.
          res.status(204).end();
        }
        if (connection) {
          try {
            connection.close();
            console.log("close connection success");
          } catch (err) {
            console.error(err.message);
          }
        }
      }
    );
  });
});

// Http method: DELETE
// URI: /patients/:patientId
// Delete the patient info given in :patientId
app.delete("/patients/:patientId", (req, res) => {
  oracledb.getConnection(connAttrs, (err, connection) => {
    if (err) {
      // Error connecting to DB
      res.set("Content-Type", "application/json");
      res.status(500).send(
        JSON.stringify({
          status: 500,
          message: "Error connecting to DB",
          detailed_message: err.message,
        })
      );
      return;
    }

    connection.execute(
      "delete from patient where patientId = :patientId",
      [req.params.patientId],
      {
        autoCommit: true,
        outFormat: oracledb.OBJECT,
      },
      (err, result) => {
        if (err || result.rowsAffected === 0) {
          // Error
          res.set("Content-Type", "application/json");
          res.status(400).send(
            JSON.stringify({
              status: 400,
              message: err ? "Input Error" : "Patient doesn't exist",
              detailed_message: err ? err.message : "",
            })
          );
        } else {
          // Resource successfully deleted. Sending an empty response body.
          res.status(204).end();
        }
        if (connection) {
          try {
            connection.close();
            console.log("close connection success");
          } catch (err) {
            console.error(err.message);
          }
        }
      }
    );
  });
});

// Http Method: GET
// URI: /wards
// Read all the wards records
app.get("/wards", (req, res) => {
  oracledb.getConnection(connAttrs, (err, connection) => {
    if (err) {
      // Error connecting to DB
      res.set("Content-Type", "application/json");
      res.status(500).send(
        JSON.stringify({
          status: 500,
          message: "Error connecting to DB",
          detailed_message: err.message,
        })
      );
      return;
    }
    connection.execute(
      "select * from ward",
      {},
      {
        outFormat: oracledb.OBJECT,
      },
      (err, result) => {
        if (err) {
          res.set("Content-Type", "application/json");
          res.status(500).send(
            JSON.stringify({
              status: 500,
              message: "Error getting the patient info",
              detailed_message: err.message,
            })
          );
        } else {
          res.contentType("application/json").status(200);
          res.send(JSON.stringify(result.rows));
        }
        if (connection) {
          try {
            connection.close();
            console.log("close connection success");
          } catch (err) {
            console.error(err.message);
          }
        }
      }
    );
  });
});

// Http Method: GET
// URI: /pharmacy
// Read all the pharmacy records
app.get("/pharmacy", (req, res) => {
  oracledb.getConnection(connAttrs, (err, connection) => {
    if (err) {
      // Error connecting to DB
      res.set("Content-Type", "application/json");
      res.status(500).send(
        JSON.stringify({
          status: 500,
          message: "Error connecting to DB",
          detailed_message: err.message,
        })
      );
      return;
    }
    connection.execute(
      "select * from pharmacy",
      {},
      {
        outFormat: oracledb.OBJECT,
      },
      (err, result) => {
        if (err) {
          res.set("Content-Type", "application/json");
          res.status(500).send(
            JSON.stringify({
              status: 500,
              message: "Error getting the patient info",
              detailed_message: err.message,
            })
          );
        } else {
          res.contentType("application/json").status(200);
          res.send(JSON.stringify(result.rows));
        }
        if (connection) {
          try {
            connection.close();
            console.log("close connection success");
          } catch (err) {
            console.error(err.message);
          }
        }
      }
    );
  });
});

// Http Method: GET
// URI: /insurance
// Read all the insurance records
app.get("/insurances", (req, res) => {
  oracledb.getConnection(connAttrs, (err, connection) => {
    if (err) {
      // Error connecting to DB
      res.set("Content-Type", "application/json");
      res.status(500).send(
        JSON.stringify({
          status: 500,
          message: "Error connecting to DB",
          detailed_message: err.message,
        })
      );
      return;
    }
    connection.execute(
      "select * from insurance",
      {},
      {
        outFormat: oracledb.OBJECT,
      },
      (err, result) => {
        if (err) {
          res.set("Content-Type", "application/json");
          res.status(500).send(
            JSON.stringify({
              status: 500,
              message: "Error getting the patient info",
              detailed_message: err.message,
            })
          );
        } else {
          res.contentType("application/json").status(200);
          res.send(JSON.stringify(result.rows));
        }
        if (connection) {
          try {
            connection.close();
            console.log("close connection success");
          } catch (err) {
            console.error(err.message);
          }
        }
      }
    );
  });
});

//set port, listen for requests
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}.");
});
