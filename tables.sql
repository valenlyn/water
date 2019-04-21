CREATE TABLE IF NOT EXISTS owners (
	id SERIAL PRIMARY KEY,
	email TEXT,
	name TEXT,
	password TEXT,
	created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS plants (
	id SERIAL PRIMARY KEY,
	name TEXT,
	nickname TEXT,
	frequency INTEGER,
	img TEXT DEFAULT 'https://res.cloudinary.com/water123/image/upload/v1555840305/defaultplant_g3pcfc.png',
	next_water_date DATE,
	instructions TEXT,
	watered BOOLEAN DEFAULT false,
	created_at TIMESTAMPTZ DEFAULT now(),
	owner_id INTEGER,
	reminder_type TEXT,
	alive BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS plants_owners (
	id SERIAL PRIMARY KEY,
	plant_id INTEGER,
	owner_id INTEGER
);

CREATE TABLE IF NOT EXISTS watered (
	id SERIAL PRIMARY KEY,
	plant_id INTEGER,
	watered_on DATE DEFAULT now(),
	watered_by INTEGER,
	created_at TIMESTAMPTZ DEFAULT now()
);