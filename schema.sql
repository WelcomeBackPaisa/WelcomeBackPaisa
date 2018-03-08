DROP DATABASE IF EXISTS paisa;

CREATE DATABASE paisa;

USE paisa;

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userName varchar(55)
);


INSERT INTO user(userName) VALUES('rainbowBrony');
INSERT INTO user(userName) VALUES('theBlackLobo');
INSERT INTO user(userName) VALUES('emperorCamilo');
INSERT INTO user(userName) VALUES('codingNerd45');
INSERT INTO user(userName) VALUES('vatoLoco1');
INSERT INTO user(userName) VALUES('cleverUser2');


CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT,
  post_id INT NOT NULL,
  post_subject text,
  PRIMARY KEY(id),
  FOREIGN KEY(post_id) REFERENCES user(id)
);


INSERT INTO posts(post_id, post_subject) VALUES(1, '');
INSERT INTO posts(post_id, post_subject) VALUES(2, '');
INSERT INTO posts(post_id, post_subject) VALUES(3, '');
INSERT INTO posts(post_id, post_subject) VALUES(4, '');
INSERT INTO posts(post_id, post_subject) VALUES(5, '');
INSERT INTO posts(post_id, post_subject) VALUES(6, '');


CREATE TABLE reply(
  id INT NOT NULL AUTO_INCREMENT,
  reply_id INT NOT NULL,
  reply_text text,
  PRIMARY KEY(id),
  FOREIGN KEY(reply_id) REFERENCES posts(id)
);


INSERT INTO reply(reply_id, reply_text) VALUES(1, '');
INSERT INTO reply(reply_id, reply_text) VALUES(2, '');
INSERT INTO reply(reply_id, reply_text) VALUES(3, '');
INSERT INTO reply(reply_id, reply_text) VALUES(4, '');
INSERT INTO reply(reply_id, reply_text) VALUES(5, '');
INSERT INTO reply(reply_id, reply_text) VALUES(6, '');
