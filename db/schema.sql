USE ibEjgWrSuB;
CREATE DATABASE burgers_db;
DROP TABLE IF EXISTS burgers;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    food_state BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);