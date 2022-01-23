const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "DragonBalrog1863",
    host: "localhost",
    port: 5432,
    database: "storage_rents"
});

pool.connect();
console.log ("client connected ")

module.exports = pool;