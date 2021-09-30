create table Food(
fID  int(11) NOT NULL AUTO_INCREMENT,
fName  varchar(45) DEFAULT NULL,
fDescription  varchar(100) DEFAULT NULL,
fPrice  decimal(10,2),
PRIMARY KEY (fID));

INSERT INTO Food (fName, fDescription, fPrice) VALUES
('Specialty Fried Rice', 'Fried rice with signature sauce.','4.00'),
('Beef/Chicken Fried Rice', 'Fried rice with specially marinated beef slices / chicken thigh.','5.00'),
('Green Curry Fried Rice', 'Fried rice with tangy green curry.','4.50'),
('BBQ pork Fried Rice', 'Fried rice with sweet and savoury pork chunks.','4.50');

SELECT * FROM Food;

create table Register(
rID  int(11) NOT NULL AUTO_INCREMENT,
rName varchar(45) NOT NULL,
rEmail varchar(45) DEFAULT NULL,
rMobile int(8) DEFAULT NULL,
rAddress varchar(45) DEFAULT NULL,
rPassword varchar(45) DEFAULT NULL,
PRIMARY KEY (rID));

INSERT INTO Register (rName, rEmail, rMobile, rAddress, rPassword) VALUES 
('Tom Cruise', 'tomcruise@gmail.com', '98765432','21 Mandai Road', 'tomcruisebest'),
('Tony Stark', 'playboyphilanthropist@gmail.com', '91234567','18 Yishun Ring', 'jaRvIs');

SELECT * FROM Register;

