DROP DATABASE IF EXISTS TabsDB;

CREATE DATABASE TabsDB;

USE TabsDB;

CREATE TABLE Reviews (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  review varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

-- CREATE TABLE Questions (
--   id int NOT NULL AUTO_INCREMENT,
--   name varchar(50) NOT NULL,
--   PRIMARY KEY (ID),
-- );

INSERT INTO Reviews (id, name, review)
VALUES (1, "Paul", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (2, "Mike G", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (3, "Mike H", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (4, "Dalton", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (5, "Marc", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (6, "Emery", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (7, "Tyler", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (8, "Nic", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (9, "Collin", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (10, "Andrew", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (11, "Matt", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (12, "Zubair", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (13, "Caroline", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (14, "Mario", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (15, "Tye", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (16, "Kim", "These Masks are awesome!");
