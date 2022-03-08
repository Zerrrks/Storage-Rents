const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path")
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

//process.env.PORT
//process.env.NODE_ENV

//ROUTES//

//register and login
app.use(cors());
app.use(express.json())
app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "Template/build/index.html")));
}
console.log(__dirname)
//create a location
app.post("/locations", async (req, res) => {
    try {
        const { zipcode } = req.body;
        const { storage_type } = req.body;
        const { time_need } = req.body;
        const { location_address } = req.body;
        const { size } = req.body;
        const newLocation = await pool.query(
            "INSERT INTO locations (zipcode, storage_type, time_need, location_address, size) VALUES ($1, $2, $3, $4, $5) RETURNING * ",
            [zipcode, storage_type, time_need, location_address, size]
        );
        res.json(newLocation.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

//create a profile
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

//create a storage
app.post("/storage", async (req, res) => {
    try {
        const { location_name } = req.body;
        const { location_price } = req.body;
        const { square_footage } = req.body;
        const { full_name } = req.body;
        const { street_name } = req.body;
        const { city_storage } = req.body;
        const { country_storage } = req.body;
        const { postal_c } = req.body;
        const { add_details } = req.body;
        const newProf = await pool.query(
            "INSERT INTO storage (location_name, location_price, square_footage, full_name, street_name, city_storage, country_storage, postal_c, add_details) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING * ",
            [location_name, location_price, square_footage, full_name, street_name, city_storage, country_storage, postal_c, add_details]
        );
        res.json(newProf.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})
// Delete storage
app.delete("/storage/:storage_id", async (req, res) => {
    try {
        const deleteProf = await pool.query("DELETE FROM storage where storage_id = $1", [
            req.params.storage_id,
        ]);
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.error(err.message);
    }
});

//update a storage

app.put("/storage/:id", async (req, res) => {
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
            "UPDATE storage SET location_name = $1, location_price = $2, square_footage = $3, full_name = $4, street_name = $5, city_storage = $6, country_storage = $7, postal_c = $8, add_details = $9 WHERE storage_id = $10",
            [location_name, location_price, square_footage, full_name, street_name, city_storage, state_storage, postal_c, add_details, id]
        );
        res.json("Storage was updated.");
    } catch (err) {
        console.error(err.message);
    }
});

//get a storage

app.get("/storage/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const storage = await pool.query("SELECT * FROM storage WHERE storage_id = $1", [id]);
        res.json(storage.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all storage

app.get("/storage", async (req, res) => {
    try {
        const allStorage = await pool.query("SELECT * FROM storage");
        res.json(allStorage.rows);
    } catch (err) {
        console.error(err.message);
    }
});

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
        const { size } = req.body;
        const updateLocation = await pool.query(
            "UPDATE locations SET zipcode = $1, storage_type = $2, time_need = $3, location_address = $4, size = $5 WHERE location_id = $6",
            [zipcode, storage_type, time_need, location_address, size, id]
        );
        res.json("Profile was updated.");
    } catch (err) {
        console.error(err.message);
    }
});

//get all profiles

app.get("/prof", async (req, res) => {
    try {
        const allProf = await pool.query("SELECT * FROM prof");
        res.json(allProf.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a profile

app.get("/prof/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const prof = await pool.query("SELECT * FROM prof WHERE prof_id = $1", [id]);
        res.json(prof.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//update a profile

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

//create a user

app.post("/users", async (req, res) => {
    try {
        const { usernamex } = req.body;
        const { passwordx } = req.body;
        const newUser = await pool.query(
            "INSERT INTO users (usernamex, passwordx) VALUES ($1, $2) RETURNING * ",
            [usernamex, passwordx]
        );
        res.json(newUser.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
})

//update a user

app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { usernamex } = req.body;
        const { passwordx } = req.body;
        const updateUser = await pool.query(
            "UPDATE prof SET usernamex = $1, passwordx = $2 WHERE user_id = $3",
            [usernamex, passwordx, id]
        );
        res.json("User was updated.");
    } catch (err) {
        console.error(err.message);
    }
});

//get a user

app.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all users

app.get("/users", async (req, res) => {
    try {
        const allUser = await pool.query("SELECT * FROM users");
        res.json(allUser.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//delete a user 
/*
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
}) */
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Template/build/index.html"));
  });

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
});