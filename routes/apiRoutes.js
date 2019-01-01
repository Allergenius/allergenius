var connection = require("../config/connection.js");
var express = require('express');
var router = express.Router();

/* GET all reactions for the user logged in. */
router.get('/api/reactions/:user', function(req, res, next) {
    console.log(req.params.user)
    const query = `SELECT * FROM reactions WHERE username = '${req.params.user}'`
    console.log(query)
 	connection.query(query, function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

/* GET profile information for the user logged in. */
router.get('/api/profile/:user', function(req, res, next) {
    const query = `SELECT * FROM userProfile WHERE username = '${req.params.user}'`
 	connection.query(query, function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

/* GET user login information for the user logged in. */
router.get('/api/users/:user', function(req, res, next) {
    const query = `SELECT * FROM users WHERE username = '${req.params.user}'`
 	connection.query(query, function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

/* POST reactions. */
router.post("/api/reactions/:user", function(req, res) {
    const query = `INSERT INTO reactions
        (reactionTime, username, symp_ItchySkin, symp_Hives, symp_ItchyEyes
        , symp_ItchyThroat, symp_RunnyNose, symp_StomachAche, symp_Rash, symp_ItchyMouth
        , symp_FaceSwelling, symp_Vomiting, symp_Diarrhea, symp_AbdominalCramps, symp_Coughing
        , symp_Wheezing, symp_Dizzy, symp_ThroatSwelling, symp_DifficultBreathing
        , symp_LossOfConsciousness, severity, food_Dairy, food_Eggs, food_Fish, food_TreeNuts
        , food_Peanuts, food_Gluten, food_Soybeans, food_Corn, food_Berries, food_Celery
        , food_Onions, food_Sesame, LengthOfTimeDays, LengthOfTimeHours, LengthOfTimeMin, Notes) 
        VALUES (${req.body.dateAndTime}, ${req.params.user}, ${req.body.symp_ItchySkin}, 
            ${req.body.symp_Hives}, ${req.body.symp_ItchyEyes}, ${req.body.symp_ItchyThroat}, 
            ${req.body.symp_RunnyNose}, ${req.body.symp_StomachAche}, ${req.body.symp_Rash}, 
            ${req.body.symp_ItchyMouth}, ${req.body.symp_FaceSwelling}, ${req.body.symp_Vomiting}, 
            ${req.body.symp_Diarrhea}, ${req.body.symp_AbdominalCramps}, ${req.body.symp_Coughing}, 
            ${req.body.symp_Wheezing}, ${req.body.symp_Dizzy}, ${req.body.symp_ThroatSwelling}, 
            ${req.body.symp_DifficultBreathing}, ${req.body.symp_LossOfConsciousness}, ${req.body.currentSeverity}, 
            ${req.body.sick}, ${req.body.food_Dairy}, ${req.body.food_Eggs}, ${req.body.food_Fish}, ${req.body.food_TreeNuts},
            ${req.body.food_Peanuts}, ${req.body.food_Gluten}, ${req.body.food_Soybeans}, ${req.body.food_Corn},
            ${req.body.food_Berries}, ${req.body.food_Celery}, ${req.body.food_Onions}, ${req.body.food_Sesame},
            ${req.body.LengthOfTimeDays}, ${req.body.LengthOfTimeHours}, ${req.body.LengthOfTimeMin}, ${req.body.Notes}
        )`
  
      console.log(query);
  
      connection.query(query, function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
  });

/* POST profile. */
router.post("/api/profile", function(req, res) {
    const query = `INSERT INTO userProfile
        (username, firstName, lastName, 
        , food_Dairy, food_Eggs, food_Fish, food_TreeNuts
        , food_Peanuts, food_Gluten, food_Soybeans, food_Corn, food_Berries, food_Celery
        , food_Onions, food_Sesame) 
        VALUES (${req.body.username}, ${req.body.firstName}, ${req.body.lastName},
            ${req.body.food_Dairy}, ${req.body.food_Eggs}, ${req.body.food_Fish}, ${req.body.food_TreeNuts},
            ${req.body.food_Peanuts}, ${req.body.food_Gluten}, ${req.body.food_Soybeans}, ${req.body.food_Corn},
            ${req.body.food_Berries}, ${req.body.food_Celery}, ${req.body.food_Onions}, ${req.body.food_Sesame}
        )`
  
      console.log(query);
  
      connection.query(query, function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
  });

module.exports = router;


