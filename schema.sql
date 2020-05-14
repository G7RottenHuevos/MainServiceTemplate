/* DELETE THE DB IF IT EXISTS */
DROP DATABASE IF EXISTS mlhapp;
/* CREATE A NEW DB */
CREATE DATABASE mlhapp;
/* USE THE DB */
USE mlhapp;
/* CREATE A TABLE FOR THE IMAGES AND THEIR NAMES */
CREATE TABLE IF NOT EXISTS mlhimgs (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  imgurl VARCHAR(60) NOT NULL,
  name VARCHAR(20)
);
/* INSERT IMAGE URL'S INTO THE DB-TABLE */
INSERT INTO mlhimgs (id, imgurl, name) VALUES (id, 'https://i.imgur.com/zM0MQFD.jpg', 'MASK');
INSERT INTO mlhimgs (id, imgurl, name) VALUES (id, 'https://i.imgur.com/zM0MQFD.jpg', 'PERSON');
INSERT INTO mlhimgs (id, imgurl, name) VALUES (id, 'https://i.imgur.com/zM0MQFD.jpg', 'VIRUS');
INSERT INTO mlhimgs (id, imgurl, name) VALUES (id, 'https://i.imgur.com/zM0MQFD.jpg', 'FILTER');