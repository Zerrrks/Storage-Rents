const router = require("express").Router();
const authorize = require("../middleware/authorization.js");
const pool = require("../db");

router.get("/storage", authorize, async (req, res) => {
    try {
        const allStorage = await pool.query("SELECT street_name, city_storage, state_storage FROM storage");
        res.json(allStorage.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;