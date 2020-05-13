DROP DATABASE IF EXISTS TabsDB;

CREATE DATABASE TabsDB;

USE TabsDB;

CREATE TABLE Reviews (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Questions (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Reviews (id, name, review)
VALUES (1, "Paul", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (2, "Mike G", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (3, "Mike H", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (1, "Dalton", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (1, "Marc", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (1, "Emery", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (1, "Tyler", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (1, "Nic", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (1, "Collin", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (1, "Andrew", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (1, "Matt", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (1, "Zubair", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (1, "Caroline", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (1, "Mario", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (1, "Tye", "These Masks are awesome!")
INSERT INTO Reviews (id, name, review)
VALUES (1, "Kim", "These Masks are awesome!")
