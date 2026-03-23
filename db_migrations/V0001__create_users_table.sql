CREATE TABLE IF NOT EXISTS t_p72121757_sky_blue_project_1.users (
    id SERIAL PRIMARY KEY,
    login VARCHAR(100) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);