CREATE DATABASE tecnoceramic; 
USE tecnoceramic;
CREATE TABLE products (
    id int(11)NOT NULL AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR (180) NOT NULL,
    amount decimal(10,2)NOT NULL,
);

