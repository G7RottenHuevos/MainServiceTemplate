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

INSERT INTO header (id, name) VALUES (1, "Albrey");
INSERT INTO header (id, name) VALUES (2, "Allen");
INSERT INTO header (id, name) VALUES (3, "Asif");
INSERT INTO header (id, name) VALUES (4, "Beth");
INSERT INTO header (id, name) VALUES (5, "Cody");
INSERT INTO header (id, name) VALUES (6, "Dan");
INSERT INTO header (id, name) VALUES (7, "Fred");
INSERT INTO header (id, name) VALUES (8, "Hailey");
INSERT INTO header (id, name) VALUES (9, "Heather");
INSERT INTO header (id, name) VALUES (10, "Joel");
INSERT INTO header (id, name) VALUES (11, "John");
INSERT INTO header (id, name) VALUES (12, "Kan");
INSERT INTO header (id, name) VALUES (13, "Linden");
INSERT INTO header (id, name) VALUES (14, "Liz");
INSERT INTO header (id, name) VALUES (15, "Magee");
INSERT INTO header (id, name) VALUES (16, "Marcus");
INSERT INTO header (id, name) VALUES (17, "Marlene");
INSERT INTO header (id, name) VALUES (18, "Mohammed");
INSERT INTO header (id, name) VALUES (19, "Mylani");
INSERT INTO header (id, name) VALUES (20, "Omar");
INSERT INTO header (id, name) VALUES (21, "Rebecca");
INSERT INTO header (id, name) VALUES (22, "Robin");
INSERT INTO header (id, name) VALUES (23, "Sophie");
INSERT INTO header (id, name) VALUES (24, "Tom");


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
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 17, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 18, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 19, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 20, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 21, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 22, "YES");
INSERT INTO headerResults (from_student, to_student, preference_type) VALUES (1, 23, "YES");
