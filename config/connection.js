var mysql = require("mysql");
var connection;

// create mySQL connection object
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        // specify port
        // port: 3306,
        // your username
        user: "root",
        // your password
        password: "Jxrfhbrec24@",
        database: "passport_demo"
    });
};


// Connect to SQL database
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected to mySQL as id " + connection.threadId + "\n");
});

// export the connection
module.exports = connection;