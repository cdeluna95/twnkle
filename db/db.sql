CREATE TABLE users(
    userId int AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    dob DATE NOT NULL,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(20) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    preference ENUM('Male', 'Female', 'Bi'),
    active TINYINT(1) DEFAULT 1,
    lastSignin DATE
);
