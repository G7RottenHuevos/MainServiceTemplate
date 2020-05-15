DROP DATABASE IF EXISTS TabsDB;

CREATE DATABASE TabsDB;

USE TabsDB;

CREATE TABLE Reviews (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  review varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Questions (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  question varchar(200) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO Reviews (name, review)
VALUES ("Paul", "These Masks are awesome!"), ("Mike G", "0/5, these are not a Google Drive"),
("Collin S", "These are not what i though they would be"),
("Dalton", "I still got the Rona even with them on"), 
("Marc", "I only bought these because i needed one to go to the shoppet"),
("Emery", "The picture shows a blue mask, but i recieved green!?!?"),
("Tyler", "I use these in Walmart all the time!"),
("Nic", "These were adequate"),("Collin", "They did the job"),
( "Andrew", "These are overpriced"),
("Matt", "They work well, but costs too much"),("Zubair", "These Masks are awesome!"),
( "Caroline", "These masks are too small"),
("Mario", "I really like how the masks feel!"),("Tye", "These Masks are awesome!"),
("Kim", "These Masks are awesome!");

INSERT INTO Questions (name, question)
VALUES ("Paul", "Are these reusable?"),("Mike G", "What is a google drive????????????"),
("Collin S", "How many Masks do these come with?"),
("Dalton", "What color are the masks?"),("Marc", "Are these made in China?"),
("Emery", "Will these stop CoronaISIS?"),("Tyler", "How many times can we use these?"),
("Nic", "Are these masks stylish?"),("Collin", "How many masks are there?"),("Andrew", "What is life?"),
("Matt", "Do you deliver to Killeen???"),("Zubair", "How long is the shipping period?"),("Caroline", "Can anyone confirm how these masks feel?"),
("Mario", "How many uses can i use them for?"),("Tye", "I would like to buy in bulk, how many can i order"),("Kim", "Do they come in red?");