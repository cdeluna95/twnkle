CREATE TABLE users
(
    userId INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    username VARCHAR(20) NOT NULL,
    hashedPassword VARCHAR(256) NOT NULL,
    email VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    gender ENUM('MALE', 'FEMALE') NOT NULL,
    preference ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL,
    lastActive DATETIME,
    easternSign INT(11) NOT NULL,
    westernSign INT(11) NOT NULL,
    status TINYINT(1) DEFAULT '2',
    profilePicture VARCHAR(200)
);

CREATE TABLE matches
(
matchId INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
userId INT(11) NOT NULL,
userId2 INT(11) NOT NULL,
matchStatus TINYINT(2) DEFAULT '1',
CONSTRAINT matches_ibfk_1 FOREIGN KEY (userId) REFERENCES users (userId),
CONSTRAINT matches_ibfk_2 FOREIGN KEY (userId2) REFERENCES users (userId)
);
CREATE INDEX userId ON matches (userId);
CREATE INDEX userId2 ON matches (userId2);
CREATE TABLE message
(
messageID INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
message VARCHAR(100) NOT NULL,
fromId INT(11) NOT NULL,
toId INT(11) NOT NULL,
CONSTRAINT message_users_userId_fk FOREIGN KEY (fromId) REFERENCES users (userId)
);
CREATE INDEX message_users_userId_fk ON message (fromId);
CREATE TABLE pictures
(
pictureId INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
url VARCHAR(200) NOT NULL
);
CREATE UNIQUE INDEX pictures_url_uindex ON pictures (url);
CREATE TABLE userPicture
(
userPictureId INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
pictureId INT(11) NOT NULL,
userId INT(11) NOT NULL,
isProfile TINYINT(1) DEFAULT '0',
CONSTRAINT userPicture_pictures_pictureId_fk FOREIGN KEY (pictureId) REFERENCES pictures (pictureId),
CONSTRAINT userPicture_users_userId_fk FOREIGN KEY (userId) REFERENCES users (userId)
);
CREATE INDEX userPicture_pictures_pictureId_fk ON userPicture (pictureId);
CREATE INDEX userPicture_users_userId_fk ON userPicture (userId);
CREATE TABLE user_profile
(
profileID INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
userID INT(11) NOT NULL,
aboutMe VARCHAR(1000),
lookingFor VARCHAR(500),
CONSTRAINT user_profile_users_userId_fk FOREIGN KEY (userID) REFERENCES users (userId)
);
CREATE INDEX user_profile_users_userId_fk ON user_profile (userID);
