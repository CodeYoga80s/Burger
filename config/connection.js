//  MySQL Dependency
var mysql = require("mysql");

var connection;

// prioritize Jaws DB when applicable else use local mysql db
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "Mp03101981!",
	  database: "burgers_db"
	});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;