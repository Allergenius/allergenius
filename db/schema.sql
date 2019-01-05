### Schema
DROP DATABASE IF EXISTS  allergenius_db ;

CREATE DATABASE allergenius_db;
USE allergenius_db;

CREATE TABLE users
(
	username_pk  varchar(45) NOT NULL,
	date_created datetime NOT NULL,
	last_login   datetime,
	PRIMARY KEY (username_pk)
) ENGINE=INNODB;


CREATE TABLE reactions
(
	id int NOT NULL AUTO_INCREMENT,
	startDate datetime NOT NULL, 
	endDate datetime NOT NULL, 
	username varchar(45) NOT NULL,
	title varchar(100) NOT NULL,
	symp_ItchySkin  boolean NOT NULL DEFAULT False,
	symp_Hives  boolean NOT NULL DEFAULT False,
	symp_ItchyEyes  boolean NOT NULL DEFAULT False,
	symp_ItchyThroat  boolean NOT NULL DEFAULT False,
	symp_RunnyNose  boolean NOT NULL DEFAULT False,
	symp_StomachAche  boolean NOT NULL DEFAULT False,
	symp_Rash  boolean NOT NULL DEFAULT False,
	symp_ItchyMouth  boolean NOT NULL DEFAULT False,
	symp_FaceSwelling  boolean NOT NULL DEFAULT False,
	symp_VomitingDiarrhea  boolean NOT NULL DEFAULT False,
	symp_AbdominalCramps  boolean NOT NULL DEFAULT False,
	symp_Cough  boolean NOT NULL DEFAULT False,
	symp_Dizzy  boolean NOT NULL DEFAULT False,
	symp_ThroatSwelling  boolean NOT NULL DEFAULT False,
	symp_DifficultBreathing  boolean NOT NULL DEFAULT False,
	symp_LossOfConsciousness  boolean NOT NULL DEFAULT False,
	severity integer NOT NULL DEFAULT 1,
	sick boolean NOT NULL DEFAULT False,
	-- indoors boolean NOT NULL DEFAULT False,
	-- outdoors boolean NOT NULL DEFAULT False, 
	-- animal_Cat boolean NOT NULL DEFAULT False,
	-- animal_Dog boolean NOT NULL DEFAULT False,
	-- animal_Horse boolean NOT NULL DEFAULT False,
	-- animal_Cow boolean NOT NULL DEFAULT False,
	-- animal_Bird boolean NOT NULL DEFAULT False,
	-- animal_Rabbit boolean NOT NULL DEFAULT False,
	-- animal_Insects boolean NOT NULL DEFAULT False,
	-- animal_Fish boolean NOT NULL DEFAULT False,
	food_Dairy boolean NOT NULL DEFAULT False,
	food_Eggs boolean NOT NULL DEFAULT False,
	food_Fish boolean NOT NULL DEFAULT False,
	food_TreeNuts boolean NOT NULL DEFAULT False,
	food_Peanuts boolean NOT NULL DEFAULT False,
	food_Gluten boolean NOT NULL DEFAULT False,
	food_Soybeans boolean NOT NULL DEFAULT False,
	food_Corn boolean NOT NULL DEFAULT False,
	food_Berries boolean NOT NULL DEFAULT False,
	food_Celery boolean NOT NULL DEFAULT False,
	food_Onions boolean NOT NULL DEFAULT False,
	food_Sesame boolean NOT NULL DEFAULT False,
	-- diffHandsoap boolean NOT NULL DEFAULT false,
	-- diffShampoo boolean NOT NULL DEFAULT false,
	-- diffLotion boolean NOT NULL DEFAULT false,
	-- diffDetergent boolean NOT NULL DEFAULT false,
	-- diffPerfume boolean NOT NULL DEFAULT false,
	Notes text,
	PRIMARY KEY (id),
	CONSTRAINT userdaytitle UNIQUE(username,startDate,endDate,title)
);


CREATE TABLE userProfile
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(45) NOT NULL,
	firstName varchar(50) NOT NULL,
	lastName varchar(50) NOT NULL,
	-- homeZipCode integer,
	-- workZipCode integer,
	food_Dairy boolean NOT NULL DEFAULT False,
	food_Eggs boolean NOT NULL DEFAULT False,
	food_Fish boolean NOT NULL DEFAULT False,
	food_TreeNuts boolean NOT NULL DEFAULT False,
	food_Peanuts boolean NOT NULL DEFAULT False,
	food_Gluten boolean NOT NULL DEFAULT False,
	food_Soybeans boolean NOT NULL DEFAULT False,
	food_Corn boolean NOT NULL DEFAULT False,
	food_Berries boolean NOT NULL DEFAULT False,
	food_Celery boolean NOT NULL DEFAULT False,
	food_Onions boolean NOT NULL DEFAULT False,
	food_Sesame boolean NOT NULL DEFAULT False,
	PRIMARY KEY (id)
);