CREATE DATABASE storage_rents;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    alias VARCHAR(255)
);

ALTER TABLE prof
    ADD addy VARCHAR(1000);

CREATE TABLE prof(
    prof_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    city VARCHAR(255),
    country VARCHAR(255),
    postal_code VARCHAR(255),
    info VARCHAR(1000)
);