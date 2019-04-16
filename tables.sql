CREATE TABLE IF NOT EXISTS owners (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT,
	created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS plants (
	id SERIAL PRIMARY KEY,
	name TEXT,
	nickname TEXT,
	frequency INTEGER,
	img TEXT,
	next_water_date DATE,
	watered BOOLEAN,
	created_at TIMESTAMPTZ DEFAULT now(),
	owner_id INTEGER
);

CREATE TABLE IF NOT EXISTS plants_owners (
	id SERIAL PRIMARY KEY,
	plant_id INTEGER,
	owner_id INTEGER
);


CREATE TABLE IF NOT EXISTS watered (
	id SERIAL PRIMARY KEY,
	plant_id INTEGER,
	watered_on TIMESTAMPTZ,
	watered_by INTEGER
)