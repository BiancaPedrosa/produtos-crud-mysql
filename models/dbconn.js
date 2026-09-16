// This code connects to a MySQL database and performs a simple query.  
var mysql = require("mysql2");

var hostname = "5i47pm.h.filess.io";
var database = "Restaurante_greatestof";
var port = "61032";
var username = "Restaurante_greatestof";
var password = "0ea487585374eea969d63e6d7ddf2b7cee2c603c";

var con = mysql.createConnection({
  host: hostname,
  user: username,
  password,
  database,
  port,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

con.query("SELECT 1+1").on("result", function (row) {
  console.log(row);
});
