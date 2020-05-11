DROP DATABASE IF EXISTS newEggDataBase;

CREATE DATABASE newEggDataBase;

USE newEggDataBase;

CREATE TABLE IF NOT EXISTS similar_items (
  id integer AUTO_INCREMENT UNIQUE PRIMARY KEY,
  item_name varchar(255),
  item_catagory varchar(255),
  price varchar(255), <CHANGE THIS 
  html varchar(255)
);

 

INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("Protective Mask - 50 pcs / box", "Medical", "$29.99", "HTML");
INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("Disposable Protective Mask", "Medical","$29.99","HTML");
INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("PURELL", "Medical", "$24.99","HTML");
INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("Disposable Mask 3-layer Protective Mask ","Medical","$33.49","HTML");
INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("Disposable Gloves", "Medical", "$14.99","HTML");
INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("Fashionable Black Mask", "Medical", "$7.96","HTML");
INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("Silver Antibacterial sanitizer", "Medical", "$14.53","HTML");
INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("Childrens Protective Mask", "Medical", "$9.99","HTML");


CREATE TABLE IF NOT EXISTS customers_also_bought (
  id integer AUTO_INCREMENT UNIQUE PRIMARY KEY,
  item_name varchar(255),
  item_catagory varchar(255),
  price varchar(255), <CHANGE THIS 
  html varchar(255)
);

 

INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("Protective Mask - 50 pcs / box", "Medical", "$29.99", "HTML");
INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("Disposable Protective Mask", "Medical","$29.99","HTML");
INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("PURELL", "Medical", "$24.99","HTML");
INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("Disposable Mask 3-layer Protective Mask ","Medical","$33.49","HTML");
INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("Disposable Gloves", "Medical", "$14.99","HTML");
INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("Fashionable Black Mask", "Medical", "$7.96","HTML");
INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("Silver Antibacterial sanitizer", "Medical", "$14.53","HTML");
INSERT INTO newEggDataBase (item_name, item_catagory, price, html) VALUES ("Childrens Protective Mask", "Medical", "$9.99","HTML");
