DROP DATABASE IF EXISTS Items;

CREATE DATABASE IF NOT EXISTS Items;

USE Items;

CREATE TABLE masks (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    price int (50) NOT NULL,
    PRIMARY KEY (ID)
);

INSERT INTO masks (name, price)
VALUES ("Spiderman", 50), ("Superman", 60), ("Las Vegas Raiders", 100000), ("Cowgirls", 1),
("Browns are trash", 10), ("Dalton", 3), ("Darth Vader", 50), ("Mad Hatter", 5), 
("TelliTubbies", 30), ("Dora The Explorer", 75), ("Los Angeles Dodgers", 1000), ("USC Trojans", 500),
("PiedPiper", 350), ("Kobe", 1000000), ("Plastic Bag", 2);

