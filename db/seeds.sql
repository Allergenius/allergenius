USE allergenius_db;

##Clear out reactions
Delete from reactions;

INSERT into reactions (title, startDate, endDate, username, symp_ItchySkin, severity, food_Dairy)
VALUES ("First Reaction", "2019-01-04-15:30:00", "2019-01-04-17:30:00", 'testUser', True, 4, True);

INSERT into reactions (title, startDate, endDate, username, symp_ItchySkin, severity, food_Dairy)
VALUES ("First Reaction", "2019-01-04-17:30:00", "2019-01-04-18:30:00", 'testUser', True, 4, True);

INSERT into reactions (title, startDate, endDate, username, symp_ItchySkin, severity, food_Dairy)
VALUES ("Same time as First Reaction", "2019-01-04-15:30:00", "2019-01-04-17:30:00", 'testUser', True, 4, True);

INSERT into reactions (title, startDate, endDate, username, symp_ItchySkin, severity, food_Dairy)
VALUES ("First Reaction", "2019-01-04-15:30:00", "2019-01-04-17:30:00", 'testUser2', True, 4, True);

INSERT into reactions (title, startDate, endDate, username, symp_Rash, severity, food_Gluten)
VALUES ("Second Reaction", "2019-01-08-17:30:00", "2019-01-08-17:30:00", 'testUser', True, 4, True);

INSERT into reactions (title, startDate, endDate, username, symp_AbdominalCramps, severity, food_Fish)
VALUES ("Third Reaction", "2019-01-19-09:00:00", "2019-01-19-09:00:00", 'testUser', True, 4, True);

INSERT into reactions (title, startDate, endDate, username, symp_FaceSwelling, severity, food_Peanuts)
VALUES ("Fourth Reaction", "2019-01-23-12:27:00", "2019-01-23-12:27:00", 'testUser', True, 4, True);

##Clear out profile
Delete from userprofile;

INSERT into userprofile (username, firstName, lastName)
VALUES ('testUser', 'test', 'user');
INSERT into userprofile (username, firstName, lastName)
VALUES ('testUser2', 'test', 'user2');


