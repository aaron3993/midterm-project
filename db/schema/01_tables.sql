-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users
CASCADE;
DROP TABLE IF EXISTS orders
CASCADE;
DROP TABLE IF EXISTS ordered_items
CASCADE;
DROP TABLE IF EXISTS menu_items
CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  role TEXT NOT NULL
);

CREATE TABLE menu_items(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  thumbnail_url VARCHAR(255),
  price INTEGER NOT NULL,
  description TEXT,
  category VARCHAR(255) NOT NULL
);

CREATE TABLE orders(
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  placed_at VARCHAR(255) NOT NULL,
  special_instructions TEXT,
  wait_time INTEGER,
  order_status TEXT NOT NULL,
  ready_at VARCHAR(255)
);

CREATE TABLE ordered_items(
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id INTEGER REFERENCES menu_items(id),
  qty INTEGER NOT NULL
);
