const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "password123",
    host: "storage-rents.ck7d6vneh0q0.us-east-2.rds.amazonaws.com",
    port: 5432,
    database: "sr_db"
});

pool.connect();
console.log ("client connected")

module.exports = pool;