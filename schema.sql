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

-- CREATE TABLE *TableName* (
--   id int NOT NULL AUTO_INCREMENT,
--   from_student int NOT NULL,
--   to_student int NOT NULL,
--   preference_type ENUM("YES", "NO", "VETO") NOT NULL,
--   PRIMARY KEY (ID)
-- );