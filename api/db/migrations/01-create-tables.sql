CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  task VARCHAR(512),
  done BOOLEAN DEFAULT FALSE
);