USE allergenius_db;

INSERT INTO users (username_pk, date_created, last_login) VALUES('testUser', now(), now());

INSERT into reactions (title, start, end, reactionTime, username, symp_ItchySkin, 
severity, food_Dairy)
VALUES ("First Reaction", now(), "2019-01-04-17:30:00", now(), 'testUser', True, 4, True);

INSERT into reactions (title, start, end, reactionTime, username, symp_Rash, 
severity, food_Gluten)
VALUES ("Second Reaction", "2019-01-08-17:30:00", "2019-01-08-17:30:00", 
"2019-01-08-19:30:00", 'testUser', True, 4, True);

INSERT into reactions (title, start, end, reactionTime, username, symp_AbdominalCramps, 
severity, food_Fish)
VALUES ("Third Reaction", "2019-01-19-09:00:00", "2019-01-19-09:00:00", 
"2019-01-19-09:00:00", 'testUser', True, 4, True);

INSERT into reactions (title, start, end, reactionTime, username, symp_FaceSwelling, 
severity, food_Peanuts)
VALUES ("Fourth Reaction", "2019-01-23-12:27:00", "2019-01-23-12:27:00", 
"2019-01-23-12:56:00", 'testUser', True, 4, True);

INSERT into userprofile (username, firstName, lastName)
VALUES ('testUser', 'test', 'user');