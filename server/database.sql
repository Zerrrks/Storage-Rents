CREATE DATABASE storage_rents;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    alias VARCHAR(255)
);

ALTER TABLE prof
    ADD addy VARCHAR(1000);

ALTER TABLE locations
    ADD size VARCHAR(255);

CREATE TABLE prof(
    prof_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    city VARCHAR(255),
    country VARCHAR(255),
    postal_code VARCHAR(255),
    info VARCHAR(255),
    email VARCHAR(255),
    addy VARCHAR(255)
);

CREATE TABLE storage(
    storage_id SERIAL PRIMARY KEY,
    location_name VARCHAR(255),
    location_price VARCHAR(255),
    square_footage VARCHAR(255),
    full_name VARCHAR(255),
    street_name VARCHAR(255),
    city_storage VARCHAR(255),
    country_storage VARCHAR(255),
    postal_c VARCHAR(255),
    add_details VARCHAR(255)
);

CREATE TABLE locations(
    location_id SERIAL PRIMARY KEY,
    zipcode VARCHAR(255),
    storage_type VARCHAR(255),
    time_need VARCHAR(255),
    location_address VARCHAR(255)
);

DELETE FROM locations WHERE location_id = 1;