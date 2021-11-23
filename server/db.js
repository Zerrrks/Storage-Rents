const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "user12345!",
    host: "storage-rents.ck7d6vneh0q0.us-east-2.rds.amazonaws.com",
    port: 5432,
    database: "storage_rents"
});

module.exports = pool;