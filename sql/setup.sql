-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists pets;

CREATE TABLE pets (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    species VARCHAR,
    breed VARCHAR,
    age BIGINT
);

INSERT INTO pets (name, species, breed, age) VALUES 
('Arya', 'Dog', 'Treeing Walker Coonhound', '9'),
('Boulder', 'Dog', 'Pitt Mix', '6'),
('Crowley', 'Turtle', 'Red-Earred Slider', '5'),
('Fancy', 'Fish', 'Clown', '1'),
('Alfred', 'Fish', 'Pleco', '5'),
('Ninja', 'Fish', 'Clown', '1')