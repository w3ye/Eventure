DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS available_days CASCADE;
DROP TABLE IF EXISTS user_votes CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

CREATE TABLE events(
    id SERIAL PRIMARY KEY NOT NULL,
    owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    close_submission TIMESTAMP,
    detail TEXT
);

CREATE TABLE available_days (
    id SERIAL PRIMARY KEY NOT NULL,
    event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
    a_day TIMESTAMP,
    start_time TIME,
    end_time TIME
);

CREATE TABLE user_votes (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    available_day_id INTEGER REFERENCES available_days(id) ON DELETE CASCADE
);