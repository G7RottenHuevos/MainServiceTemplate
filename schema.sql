DROP DATABASE IF EXISTS TabsDB;

CREATE DATABASE TabsDB;

USE TabsDB;

CREATE TABLE Reviews (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  review varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Questions (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  question varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Reviews (id, name, review)
VALUES (1, "Paul", "These Masks are awesome!");
INSERT INTO Reviews (id, name, review)
VALUES (2, "Mike G", "Can these make me a google drive?????");
INSERT INTO Reviews (id, name, review)
VALUES (3, "Collin S", "These are not what i though they would be");
INSERT INTO Reviews (id, name, review)
VALUES (4, "Dalton", "I still got the Rona even with them on");
INSERT INTO Reviews (id, name, review)
VALUES (5, "Marc", "I only bought these because i needed one to go to the shoppet");
INSERT INTO Reviews (id, name, review)
VALUES (6, "Emery", "The picture shows a blue mask, but i recieved green!?!?");
INSERT INTO Reviews (id, name, review)
VALUES (7, "Tyler", "I use these in Walmart all the time!");
INSERT INTO Reviews (id, name, review)
VALUES (8, "Nic", "These were adequate");
INSERT INTO Reviews (id, name, review)
VALUES (9, "Collin", "They did the job");
INSERT INTO Reviews (id, name, review)
VALUES (10, "Andrew", "These are overpriced");
INSERT INTO Reviews (id, name, review)
VALUES (11, "Matt", "They work well, but costs too much");
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


INSERT INTO Questions (id, name, question)
VALUES (1, "Paul", "Are these reusable?");
INSERT INTO Questions (id, name, question)
VALUES (2, "Mike G", "What is a google drive????????????");
INSERT INTO Questions (id, name, question)
VALUES (3, "Collin S", "How many Masks do these come with?");
INSERT INTO Questions (id, name, question)
VALUES (4, "Dalton", "What color are the masks?");
INSERT INTO Questions (id, name, question)
VALUES (5, "Marc", "Are these made in China?");
INSERT INTO Questions (id, name, question)
VALUES (6, "Emery", "Will these stop CoronaISIS?");
INSERT INTO Questions (id, name, question)
VALUES (7, "Tyler", "How many times can we use these?");
INSERT INTO Questions (id, name, question)
VALUES (8, "Nic", "Cool Masks?");
INSERT INTO Questions (id, name, question)
VALUES (9, "Collin", "What is life?");
INSERT INTO Questions (id, name, question)
VALUES (10, "Andrew", "What is life?");
INSERT INTO Questions (id, name, question)
VALUES (11, "Matt", "What is life?");
INSERT INTO Questions (id, name, question)
VALUES (12, "Zubair", "What is life?");
INSERT INTO Questions (id, name, question)
VALUES (13, "Caroline", "What is life?");
INSERT INTO Questions (id, name, question)
VALUES (14, "Mario", "What is life?");
INSERT INTO Questions (id, name, question)
VALUES (15, "Tye", "What is life?");
INSERT INTO Questions (id, name, question)
VALUES (16, "Kim", "What is life?");
