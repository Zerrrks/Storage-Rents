const router = require("express").Router();
const authorize = require("../middleware/authorization.js");
const pool = require("../db");


// all profile and name
router.get("/", authorize, async (req, res) => {
    try {

        // get profile for a specified user id
        const user = await pool.query(
            "SELECT u.user_name, s.profile_id, s.first_name, s.last_name, s.city_prof, s.state_prof, s.contact FROM users AS u LEFT JOIN profile AS s ON u.user_id = s.user_id WHERE u.user_id = $1",
            [req.user]
        );

        res.json(user.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});




//create a profile
router.post("/profile", authorize, async (req, res) => {
    try {
        const { first_name } = req.body;
        const { last_name } = req.body;
        const { city_prof } = req.body;
        const { state_prof } = req.body;
        const { contact } = req.body;
        const newProfile = await pool.query(
            "INSERT INTO profile (user_id, first_name, last_name, city_prof, state_prof, contact) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [req.user, first_name, last_name, city_prof, state_prof, contact]
        );
        res.json(newProfile.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})
// Delete profile
router.delete("/profile/:id", authorize, async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProfile = await pool.query("DELETE FROM profile where profile_id = $1 AND user_id = $2 RETURNING *",
            [id, req.user]
        );
        if (deleteProfile.rows.length === 0) {
            return res.json("This profile is not yours");
        }

        res.json("Profile was deleted");
    } catch (err) {
        console.error(err.message);
    }
});

//update a profile

router.put("/profile/:id", authorize, async (req, res) => {
    try {
        const { id } = req.params;
        const { first_name } = req.body;
        const { last_name } = req.body;
        const { city_prof } = req.body;
        const { state_prof } = req.body;
        const { contact } = req.body;
        const updateProfile = await pool.query(
            "UPDATE profile SET first_name = $1, last_name = $2, city_prof = $3, state_prof = $4, contact = $5 WHERE profile_id = $6 AND user_id = $7 RETURNING *",
            [first_name, last_name, city_prof, state_prof, contact, id, req.user]
        );
        if (updateProfile.rows.length === 0) {
            return res.json("This profile is not yours");
        }
        res.json("Profile was updated");
    } catch (err) {
        console.error(err.message);
    }
});

//get a profile

router.get("/profile/:id", authorize, async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await pool.query("SELECT * FROM profile WHERE profile_id = $1 AND user_id = $2",
            [id, req.user]
        );
        res.json(profile.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all profile

router.get("/profile", authorize, async (req, res) => {
    try {
        const allProfile = await pool.query("SELECT * FROM profile");
        res.json(allProfile.rows);
    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;