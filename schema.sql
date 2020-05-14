DROP DATABASE IF EXISTS header;

CREATE DATABASE header;

USE header;

CREATE TABLE header (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE headerResults (
  id int NOT NULL AUTO_INCREMENT,
  from_student int NOT NULL,
  to_student int NOT NULL,
  preference_type ENUM("YES", "NO", "VETO") NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO header (id, name) VALUES (1, "Facemask");
INSERT INTO header (id, name) VALUES (2, "Hand Sanitzer");
INSERT INTO header (id, name) VALUES (3, "Toilet Paper");
INSERT INTO header (id, name) VALUES (4, "Lysol");
INSERT INTO header (id, name) VALUES (5, "Meat");
INSERT INTO header (id, name) VALUES (6, "Bread");
INSERT INTO header (id, name) VALUES (7, "Garlic");
INSERT INTO header (id, name) VALUES (8, "Tissues");
INSERT INTO header (id, name) VALUES (9, "Water");
INSERT INTO header (id, name) VALUES (10, "Milk");
INSERT INTO header (id, name) VALUES (11, "Juice");
INSERT INTO header (id, name) VALUES (12, "First Aid Kit");
INSERT INTO header (id, name) VALUES (13, "Apples");
INSERT INTO header (id, name) VALUES (14, "Orange");
INSERT INTO header (id, name) VALUES (15, "Watermelon");

INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 2, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 3, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 4, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 5, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 6, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 7, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 8, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 9, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 10, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 11, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 12, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 13, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 14, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 15, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 16, "YES");

