CREATE DATABASE storage_rents;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

INSERT INTO users (user_name, user_email, user_password)
VALUES ('Zerks', 'zerksmurf@gmail.com', 'weebman123');

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

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
  user_id UUID DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE storage(
  storage_id SERIAL,
  user_id UUID,
  location_name VARCHAR(255) NOT NULL,
  location_price VARCHAR(255) NOT NULL,
  square_footage VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  street_name VARCHAR(255) NOT NULL,
  city_storage VARCHAR(255) NOT NULL,
  state_storage VARCHAR(255) NOT NULL,
  postal_c VARCHAR(255) NOT NULL,
  add_details VARCHAR(1000) NOT NULL,
  PRIMARY KEY (storage_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE profile(
    profile_id SERIAL,
    user_id UUID,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    city_prof VARCHAR(255) NOT NULL,
    state_prof VARCHAR(255) NOT NULL,
    contact VARCHAR(1000) NOT NULL,
    PRIMARY KEY (profile_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);