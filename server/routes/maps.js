const router = require("express").Router();
const authorize = require("../middleware/authorization.js");
const pool = require("../db");

router.get("/storage", authorize, async (req, res) => {
    try {
        const allStorage = await pool.query("SELECT street_name AS street, city_storage AS city, state_storage AS state FROM storage");
        res.json(allStorage.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;