var mysql = require('mysql');

export const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database: "bim"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

con.query("select fgf ", "", (result) => {

    }
)