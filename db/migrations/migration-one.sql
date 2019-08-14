DROP TABLE IF EXISTS employees;

CREATE TABLE IF NOT EXISTS employees (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(250),
  phone VARCHAR(250),
  picture VARCHAR(250)
);