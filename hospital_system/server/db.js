const oracledb = require('oracledb');
const dbConnect = async function () {
    let connection;
    try {
        connection = await oracledb.getConnection({
            user: "ADMIN",
            password: "13544402356Seven",
            connectionString: "ADWFINANCE_high",
        });
        console.log('connected to database');
    } catch (err) {
        console.error(err.message);
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log('close connection success');
            } catch (err) {
                console.error(err.message);
            }
        }
    }
}

module.exports = dbConnect;
