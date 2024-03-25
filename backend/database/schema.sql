DROP DATABASE IF EXISTS RichemondPlayers;
CREATE DATABASE RichemondPlayers;
USE RichemondPlayers;

  

create table user (
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(255) NOT NULL,
password VARCHAR(255),username VARCHAR(255) NOT NULL
);

  
  

CREATE TABLE team(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(250) NOT NULL,
post VARCHAR(250) NOT NULL,
description TEXT NOT NULL,
creation_datetime DATETIME NOT NULL,
user_id INT,
FOREIGN KEY (user_id) REFERENCES user(id)
);

  

INSERT INTO user (email, password, username) VALUES
('admin@gmail.com', 'secret', 'admin'),
('ted@gmail.com', 'secret', 'Ted Lasso');

  

INSERT INTO team(name, post, description, creation_datetime, user_id) VALUES
('Ted Lasso', 'Coach', 'Coach de l équipe de Richmond', NOW(), 1),
('Coach Beard', 'Coach', 'Coach en second de l équipe de Richmond', NOW(), 2);





