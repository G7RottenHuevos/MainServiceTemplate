DROP DATABASE IF EXISTS RottenHuevos;

CREATE DATABASE RottenHuevos;

USE RottenHuevos;

CREATE TABLE IF NOT EXISTS similar_items (
  id integer AUTO_INCREMENT UNIQUE PRIMARY KEY,
  item_name CHAR(255),
  item_catagory varchar(255),
  price DECIMAL(5,2), 
  html varchar(255)
);
 
INSERT INTO similar_items (item_name, item_catagory, price, html) VALUES ("Protective Mask - 50 pcs / box", "Medical", "29.99", "https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg");
INSERT INTO similar_items (item_name, item_catagory, price, html) VALUES ("Disposable Protective Mask", "Medical","29.99","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_2.jpg");
INSERT INTO similar_items (item_name, item_catagory, price, html) VALUES ("PURELL", "Medical", "24.99","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_3.jpg");
INSERT INTO similar_items (item_name, item_catagory, price, html) VALUES ("Disposable Mask 3-layer Protective Mask ","Medical","33.49","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_4.jpg");
INSERT INTO similar_items (item_name, item_catagory, price, html) VALUES ("Disposable Gloves", "Medical", "14.99","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_5.jpg");
INSERT INTO similar_items (item_name, item_catagory, price, html) VALUES ("Fashionable Black Mask", "Medical", "7.96","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_6.jpg");
INSERT INTO similar_items (item_name, item_catagory, price, html) VALUES ("Silver Antibacterial sanitizer", "Medical", "14.53","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_7.jpg");
INSERT INTO similar_items (item_name, item_catagory, price, html) VALUES ("Childrens Protective Mask", "Medical", "9.99","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_8.jpg");
INSERT INTO similar_items (item_name, item_catagory, price, html) VALUES ("Disposable Mask 3-layer Protective Mask ","Medical","33.49","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_4.jpg");
INSERT INTO similar_items (item_name, item_catagory, price, html) VALUES ("Disposable Gloves", "Medical", "14.99","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_5.jpg");


CREATE TABLE IF NOT EXISTS customers_also_bought (
  id integer AUTO_INCREMENT UNIQUE PRIMARY KEY,
  item_name CHAR(255),
  item_catagory varchar(255),
  price DECIMAL(5,2), 
  html varchar(255)
);

 


INSERT INTO customers_also_bought (item_name, item_catagory, price, html) VALUES ("Childrens Protective Mask", "Medical", "12.99","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_8.jpg");
INSERT INTO customers_also_bought (item_name, item_catagory, price, html) VALUES ("Disposable Protective Mask", "Medical","23.99","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_2.jpg");
INSERT INTO customers_also_bought (item_name, item_catagory, price, html) VALUES ("Fashionable Black Mask", "Medical", "7.93","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_6.jpg");
INSERT INTO customers_also_bought (item_name, item_catagory, price, html) VALUES ("Disposable Mask 3-layer Protective Mask ","Medical","23.49","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_4.jpg");
INSERT INTO customers_also_bought (item_name, item_catagory, price, html) VALUES ("PURELL", "Medical", "24.99","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_3.jpg");
INSERT INTO customers_also_bought (item_name, item_catagory, price, html) VALUES ("Protective Mask - 50 pcs / box", "Medical", "29.93", "https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg");
INSERT INTO customers_also_bought (item_name, item_catagory, price, html) VALUES ("Disposable Gloves", "Medical", "14.99","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_5.jpg");
INSERT INTO customers_also_bought (item_name, item_catagory, price, html) VALUES ("Silver Antibacterial sanitizer", "Medical", "34.23","https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_7.jpg");
