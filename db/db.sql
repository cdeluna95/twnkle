drop table user_profile;
drop table userPicture;
drop table message;
drop table matches;
drop table users;

/*
 This file are to create 4 tables which are users, matches, messages and user Picutures
*/
CREATE TABLE users
(
    userId INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    username VARCHAR(20) NOT NULL,
    hashedPassword VARCHAR(256) NOT NULL,
    email VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    easternSign INT NOT NULL,
    westernSign INT NOT NULL,
    gender VARCHAR(20) NOT NULL,
    preference ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL,
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
   FOREIGN KEY (matchId) 
        REFERENCES matches(matchId)
        ON DELETE NO ACTION
);

CREATE TABLE userPicture
(
    pictureID INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    userId int(11) NOT NULL,
    FOREIGN KEY (userId) 
        REFERENCES users(userId)
        ON DELETE NO ACTION,
    pictureSource VARCHAR(100) NOT NULL
    
);

CREATE TABLE user_profile
(
    profileID INT PRIMARY KEY AUTO_INCREMENT,
    userID INT NOT NULL,
    aboutMe VARCHAR(1000),
    lookingFor VARCHAR(500),
    CONSTRAINT user_profile_users_userId_fk FOREIGN KEY (userID) REFERENCES users (userId)
);