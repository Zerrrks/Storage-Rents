const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//ROUTES//


//create a location
app.post("/locations", async (req, res) => {
    try {
        const { zipcode } = req.body;
        const { storage_type } = req.body;
        const { time_need } = req.body;
        const { location_address } = req.body;
        const newLocation = await pool.query(
            "INSERT INTO locations (zipcode, storage_type, time_need, location_address) VALUES ($1, $2, $3, $4) RETURNING * ",
            [zipcode, storage_type, time_need, location_address]
        );
        res.json(newLocation.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

//create a user
app.post("/prof", async (req, res) => {
    try {
        const { username } = req.body;
        const { first_name } = req.body;
        const { last_name } = req.body;
        const { city } = req.body;
        const { country } = req.body;
        const { postal_code } = req.body;
        const { info } = req.body;
        const { email } = req.body;
        const { addy } = req.body;
        const newProf = await pool.query(
            "INSERT INTO prof (username, first_name, last_name, city, country, postal_code, info, email, addy) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ",
            [username, first_name, last_name, city, country, postal_code, info, email, addy]
        );
        res.json(newProf.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

//get all locations

app.get("/locations", async (req, res) => {
    try {
        const allLocations = await pool.query("SELECT * FROM locations");
        res.json(allLocations.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a location

app.get("/locations/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const location = await pool.query("SELECT * FROM locations WHERE location_id = $1", [id]);
        res.json(location.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//update a location

app.put("/locations/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { zipcode } = req.body;
        const { storage_type } = req.body;
        const { time_need } = req.body;
        const { location_address } = req.body;
        const updateLocation = await pool.query(
            "UPDATE locations SET zipcode = $1, storage_type = $2, time_need = $3, location_address = $4 WHERE location_id = $5",
            [zipcode, storage_type, time_need, location_address, id]
        );
        res.json("Profile was updated.");
    } catch (err) {
        console.error(err.message);
    }
});

//get all users

app.get("/prof", async (req, res) => {
    try {
        const allProf = await pool.query("SELECT * FROM prof");
        res.json(allProf.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a user

app.get("/prof/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const prof = await pool.query("SELECT * FROM prof WHERE prof_id = $1", [id]);
        res.json(prof.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//update a user

app.put("/prof/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { username } = req.body;
        const { first_name } = req.body;
        const { last_name } = req.body;
        const { city } = req.body;
        const { country } = req.body;
        const { postal_code } = req.body;
        const { info } = req.body;
        const { email } = req.body;
        const { addy } = req.body;
        const updateProf = await pool.query(
            "UPDATE prof SET username = $1, first_name = $2, last_name = $3, city = $4, country = $5, postal_code = $6, info = $7, email = $8, addy = $9 WHERE prof_id = $10",
            [username, first_name, last_name, city, country, postal_code, info, email, addy, id]
        );
        res.json("Profile was updated.");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a user

app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1",
            [id]
        );

        res.json("User was deleted.");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});