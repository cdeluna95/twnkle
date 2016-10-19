drop table matches;
drop table users;

CREATE TABLE users
(
    userId INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    username VARCHAR(20) NOT NULL,
    hashedPassword VARCHAR(256) NOT NULL,
    email VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    gender VARCHAR(20) NOT NULL,
    preference ENUM('MALE', 'FEMALE', 'BI') NOT NULL,
    active TINYINT(4) DEFAULT '1',
    lastActive DATETIME
);

CREATE TABLE matches
(
    matchId INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    userId int(11) NOT NULL,
    userId2 int(11) NOT NULL,
    matchStatus TINYINT(2) DEFAULT '1',
    FOREIGN KEY (userId) 
        REFERENCES users(userId)
        ON DELETE NO ACTION,
    FOREIGN KEY (userId2) 
    REFERENCES users(userId)
    ON DELETE NO ACTION
);

CREATE TABLE message
(
    messageID INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    matchId int(11) NOT NULL,
    message VARCHAR(100) NOT NULL,
    FOREIGN KEY (userId) 
        REFERENCES users(userId)
        ON DELETE NO ACTION
);

/*
CREATE TABLE users
(
    userId INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    username VARCHAR(20) NOT NULL,
    hashedPassword VARCHAR(256) NOT NULL,
    email VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    gender VARCHAR(20) NOT NULL,
    preference ENUM('MALE', 'FEMALE', 'BI') NOT NULL,
    active TINYINT(4) DEFAULT '1',
    lastActive DATETIME
);

CREATE TABLE matches
(
    matchID INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    FOREIGN KEY (userId1) REFERENCES users(userId) ON DELETE CASCADE,
    FOREIGN KEY (userId2) REFERENCES users(userId) ON DELETE CASCADE,
    matchStatus TINYINT(2) DEFAULT '1'
);

CREATE TABLE message
(
    messageID INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    FOREIGN KEY (matchID) REFERENCES match(matchID) ON DELETE CASCADE,
    message VARCHAR(100) NOT NULL,
    messagedDate DATETIME
);

CREATE TABLE userPicture
(
    pictureID INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE,
    pictureSource VARCHAR(256) NOT NULL,
    
);
CREATE UNIQUE INDEX users_email_uindex ON users (email);
CREATE UNIQUE INDEX users_username_uindex ON users (username);
*/