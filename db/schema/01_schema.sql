DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS available_days CASCADE;
DROP TABLE IF EXISTS user_votes CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255),
    email TEXT
);

CREATE TABLE events(
    id SERIAL PRIMARY KEY NOT NULL,
    owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    close_submission DATE,
    title TEXT,
    detail TEXT NOT NULL,
    link TEXT
);

CREATE TABLE time_slots (
    id SERIAL PRIMARY KEY NOT NULL,
    event_id INTEGER REFERENCES events(id) ON DELETE CASCADE,
    a_day DATE NOT NULL,
    start_time TIME,
    end_time TIME
);

CREATE TABLE user_votes (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    time_slot_id INTEGER REFERENCES time_slots(id) ON DELETE CASCADE
);
