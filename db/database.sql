CREATE DATABASE IF NOT EXISTS compinlogdb;

USE compinlogdb;

CREATE TABLE user (
    id INT(12) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45),
    nit INT(10),
    email VARCHAR(45),
    password VARCHAR(45),
    profile VARCHAR(45),
    PRIMARY KEY (id)
);

INSERT INTO user VALUES 
(1, 'Joe', 321546551, 'joe@gmail.com', 'joe123', 'vendedor'),
(2, 'Rosa', 654654464, 'rosa@gmail.com', 'rosa123', 'comprador'),
(3, 'Sof', 321546594, 'sof@gmail.com', 'sof123', 'vendedor');