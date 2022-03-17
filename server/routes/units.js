const router = require("express").Router();
const authorize = require("../middleware/authorization.js");
const pool = require("../db");


// all storage and name
router.get("/", authorize, async (req, res) => {
    try {

        // get storage for a specified user id
        const user = await pool.query(
            "SELECT u.user_name, s.storage_id, s.location_name, s.location_price, s.square_footage, s.full_name, s.city_storage, s.state_storage, s.postal_c, s.add_details FROM users AS u LEFT JOIN storage AS s ON u.user_id = s.user_id WHERE u.user_id = $1",
            [req.user]
        );

        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});




//create a storage
router.post("/storage", authorize, async (req, res) => {
    try {
        const { location_name } = req.body;
        const { location_price } = req.body;
        const { square_footage } = req.body;
        const { full_name } = req.body;
        const { street_name } = req.body;
        const { city_storage } = req.body;
        const { state_storage } = req.body;
        const { postal_c } = req.body;
        const { add_details } = req.body;
        const newProf = await pool.query(
            "INSERT INTO storage (user_id, location_name, location_price, square_footage, full_name, street_name, city_storage, state_storage, postal_c, add_details) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING * ",
            [req.user, location_name, location_price, square_footage, full_name, street_name, city_storage, state_storage, postal_c, add_details]
        );
        res.json(newProf.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})
// Delete storage
router.delete("/storage/:id", authorize, async (req, res) => {
    try {
        const { id } = req.params;
        const deleteStorage = await pool.query("DELETE FROM storage where storage_id = $1 AND user_id = $2",
            [id, req.user]
        );
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.error(err.message);
    }
});

//update a storage

router.put("/storage/:id", authorize, async (req, res) => {
    try {
        const { id } = req.params;
        const { location_name } = req.body;
        const { location_price } = req.body;
        const { square_footage } = req.body;
        const { full_name } = req.body;
        const { street_name } = req.body;
        const { city_storage } = req.body;
        const { state_storage } = req.body;
        const { postal_c } = req.body;
        const { add_details } = req.body;
        const updateStorage = await pool.query(
            "UPDATE storage SET location_name = $1, location_price = $2, square_footage = $3, full_name = $4, street_name = $5, city_storage = $6, state_storage = $7, postal_c = $8, add_details = $9 WHERE storage_id = $10 AND user_id = $11 RETURNING *",
            [location_name, location_price, square_footage, full_name, street_name, city_storage, state_storage, postal_c, add_details, id, req.user]
        );
        res.json("Storage was updated.");
    } catch (err) {
        console.error(err.message);
    }
});

//get a storage

router.get("/storage/:id", authorize, async (req, res) => {
    try {
        const { id } = req.params;
        const storage = await pool.query("SELECT * FROM storage WHERE storage_id = $1 AND user_id = $2",
            [id, req.user]
        );
        res.json(storage.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all storage

router.get("/storage", authorize, async (req, res) => {
    try {
        const allStorage = await pool.query("SELECT * FROM storage");
        res.json(allStorage.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;