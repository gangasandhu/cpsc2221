CREATE DATABASE DevLink_db;

CREATE TABLE Users (
userID INT PRIMARY KEY,
username VARCHAR(50) UNIQUE NOT NULL,
email VARCHAR(100) UNIQUE NOT NULL,
password VARCHAR(100) NOT NULL,
userType VARCHAR(20) NOT NULL
);

CREATE TABLE Admin (
userID INT PRIMARY KEY,
permissions TEXT NOT NULL,
FOREIGN KEY (userID) REFERENCES Users(userID)
ON DELETE CASCADE
ON UPDATE CASCADE
);

CREATE TABLE Member (
userID INT PRIMARY KEY,
interest VARCHAR(100),
verified BOOLEAN DEFAULT FALSE,
FOREIGN KEY (userID) REFERENCES Users(userID)
ON DELETE CASCADE
ON UPDATE CASCADE
);


CREATE TABLE UserFollow (
userID INT,
followerID INT ,
PRIMARY KEY (userID, followerID),
FOREIGN KEY (userID) REFERENCES Users(userID)
ON DELETE CASCADE
ON UPDATE CASCADE,
FOREIGN KEY (followerID) REFERENCES Users(userID)
ON DELETE CASCADE
ON UPDATE CASCADE
);

CREATE TABLE Posts (
    postID INT AUTO_INCREMENT PRIMARY KEY, 
    userID INT NOT NULL,                   
    title VARCHAR(255) NOT NULL,           
    content TEXT NOT NULL,                
    datePublished DATETIME DEFAULT CURRENT_TIMESTAMP, 
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE
);

CREATE TABLE Comment (
    commentID INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP, 
    postID INT NOT NULL,
    userID INT NOT NULL,
    FOREIGN KEY (postID) REFERENCES Posts(postID)
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    FOREIGN KEY (userID) REFERENCES Users(userID)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

CREATE TABLE Code (
    codeID INT AUTO_INCREMENT PRIMARY KEY, 
    userID INT NOT NULL,                          
    content TEXT NOT NULL,              
    language TEXT NOT NULL,  
    datePublished DATETIME DEFAULT CURRENT_TIMESTAMP, 
    FOREIGN KEY (userID) REFERENCES Users(userID) ON DELETE CASCADE
);