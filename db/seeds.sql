USE allergenius_db;

INSERT INTO users (username_pk, date_created, last_login) VALUES('testUser', now(), now())

INSERT into reactions (reactionTime, username, symp_ItchySkin, severity, 
food_Dairy, LengthOfTimeDays, LengthOfTimeHours, LengthOfTimeMin)
VALUES (now(), 'testUser', True, 4, True, 1, 8, 0)

INSERT into userprofile (username, firstName, lastName)
VALUES ('testUser', 'test', 'user')