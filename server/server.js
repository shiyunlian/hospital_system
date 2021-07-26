let connection;
var oracledb = require('oracledb');

(async function() {
    try {
        connection = await oracledb.getConnection({
            user: "system",
            password: "Vincent",
            connectionString: "localhost/orclpdb1"
        });
        console.log("Successfully connected to Oracle!");

        //create tables in the database using 
        await connection.execute(
            `CREATE TABLE patients(patientID int, patient_name VARCHAR2(255), gender VARCHAR2(1),
            dob DATE, diagnosis VARCHAR2(255), hospitalized_date DATE,
            ward VARCHAR2 (50), discharged_date DATE, bill NUMBER )`);
       
         
        //creating/inserting data in the oracle database
        /*
        const sqlQuery = 'INSERT INTO patients VALUES (:1, :2, :3, :4, :5, :6, :7, :8, : 9)';

        binds = [ ["135", "Chris Alexa", "M",  to_date('07-25-2001','dd-mm-yyyy'), "Flu",  to_date('07-19-2021','dd-mm-yyyy'), "Bed 202, Rom 102", to_date('07-25-2021','dd-mm-yyyy'), "7000" ],
                ["146", "Messi Alexa", "M", to_date('07-25-2002','dd-mm-yyyy'), "Flu", to_date('06-12-2021','dd-mm-yyyy'), "Bed 202, Rom 102", to_date('06-24-2021','dd-mm-yyyy'), "7000" ]
        ];
        result = await connection.executeMany(sqlQuery, binds, {});

        console.log("Number of inserted rows: ", result.rowsAffected);
        */

        //Reading data using the select query
        /*
        connection.execute(
            'SELECT *
            FROM patients',
            [],
            function(err, result) {
                if (err) {
                    console.error(err.message);
                    return;
                }
                console.log(result.rows);
            });
            */
            
        
    
    } catch (err) {
        console.log("Error: ", err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch(err) {
                console.log("Error when closing the database connection: ", err);
            }
        }
    }
})()