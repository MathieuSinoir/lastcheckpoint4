create table user (
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(255) NOT NULL,
password VARCHAR(255),
username VARCHAR(255) NOT NULL
);

  
  

CREATE TABLE team(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(250) NOT NULL,
poste VARCHAR(250) NOT NULL,
description TEXT NOT NULL,
creation_datetime DATETIME NOT NULL,
userId INT,
FOREIGN KEY (userId) REFERENCES user(id)
);

  

INSERT INTO user (email, password, username) VALUES
('admin@gmail.com', 'secret', 'admin'),
('ted@gmail.com', 'secret', 'Beard'),
('beard@gmail.com', 'secret', 'Beard'),
('zoro@gmail.com', 'secret', 'Zoro'),
('mcadoo@gmail.com', 'secret', 'McAdoo'),
('kent@gmail.com', 'secret', 'Kent'),
('obi@gmail.com', 'secret', 'Obisanya'),
('rojas@gmail.com', 'secret', 'Rojas'),
('tartt@gmail.com', 'secret', 'Tartt');




INSERT INTO team(name, poste, description, creation_datetime, userId) VALUES
('Ted Lasso', 'Coach', 'Coach de l équipe de Richmond', NOW(), 1),
('Coach Beard', 'Coach', 'Coach en second de l équipe de Richmond', NOW(), 2),
('Zoro', 'Gardien', 'Gardien de l équipe A', NOW(), 3),
('McAdoo', 'Defenseur', 'Capitaine est defenseur rugeux', NOW(), 4),
('Kent', 'Milieu', 'Joyaux de la couronne', NOW(), 5),
('Obisanya', 'Milieu', 'Jeune Milieu fougeux', NOW(), 6),
('Rojas', 'Attaquant', 'Fotball is life', NOW(), 7),
('Tartt', 'Attaquant', 'Playboy du football', NOW(), 8);











