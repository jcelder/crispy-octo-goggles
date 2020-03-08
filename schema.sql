CREATE DATABASE pets;

USE pets;

CREATE TABLE pets (
  id INT AUTO_INCREMENT,
  name VARCHAR(255),
  breed VARCHAR(255),
  rating INT NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO pets (name, breed, rating) VALUES
  ('Lucy', 'Pug', 10),
  ('Rambo', 'Pug', 10),
  ('Roxy', 'Pug', 11),
  ('Cardboard', 'A weirdly name cat', 9);