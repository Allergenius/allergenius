var connection = require("../config/connection.js");
var express = require('express');
var router = express.Router();
const moment = require('moment');

moment().format();

/* GET all reactions for the user logged in. */
router.get('/api/reactions/:user', function(req, res, next) {
    console.log(req.params.user)
    const query = `SELECT *, startDate as start, endDate as end FROM reactions WHERE user_id = ${req.params.user}`
    console.log(query)
 	connection.query(query, function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

/* GET one reaction for the user logged in. */
router.get('/api/reactions/:id/:user', function(req, res, next) {
    console.log(req.params.id)
    const query = `SELECT *, startDate as start, endDate as end FROM reactions WHERE id = ${req.params.id} AND user_id = ${req.params.user}`
    console.log(query)
 	connection.query(query, function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

/* DELETE a reaction by ID. */
router.delete('/api/reactions/:id', function(req, res, next) {
    console.log(req.params.id)
    const query = `DELETE FROM reactions WHERE id = ${req.params.id}`
    console.log(query)
 	connection.query(query, function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

/* GET profile information for the user logged in. */
router.get('/api/profile/:user', function(req, res, next) {
    console.log("req user " + req.params.user)
    const query = `SELECT * FROM userProfile WHERE user_id = ${req.params.user}`
    console.log(query) 
    connection.query(query, function (error, results, fields) {
        if(error) throw error;

        console.log("results are " + results[0])

		res.send(JSON.stringify(results));
	});
});

/* GET user login information for the user logged in. */
router.get('/api/users/:user', function(req, res, next) {
    const query = `SELECT * FROM users WHERE id = ${req.params.user}`
 	connection.query(query, function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

/* POST reactions. */
router.post("/api/reactions/:user", function(req, res) {
    console.log("Inside POST api/reactions")

    const query = `INSERT INTO reactions
        (startDate, endDate, user_id, title, symp_ItchySkin, symp_Hives, symp_ItchyEyes
        , symp_ItchyThroat, symp_RunnyNose, symp_StomachAche, symp_Rash, symp_ItchyMouth
        , symp_FaceSwelling, symp_VomitingDiarrhea, symp_AbdominalCramps, symp_Cough, symp_Dizzy, symp_ThroatSwelling, symp_DifficultBreathing
        , symp_LossOfConsciousness, severity, sick, food_Dairy, food_Eggs, food_Fish, food_TreeNuts
        , food_Peanuts, food_Gluten, food_Soybeans, food_Corn, food_Berries, food_Celery
        , food_Onions, food_Sesame, Notes) 
        VALUES ('${moment(req.body.startDate).format('YYYY-MM-DD HH:mm')}', '${moment(req.body.endDate).format('YYYY-MM-DD HH:mm')}',
            ${req.params.user}, '${req.body.title}',
            ${req.body.currentSymptoms.includes("Itchy skin") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Hives") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Itchy eyes") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Itchy throat") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Runny nose") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Stomach ache") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Flushed skin or rash") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Tingling or itchy sensation in the mouth") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Face, tongue, or lip swelling") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Vomiting and/or diarrhea") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Abdominal cramps") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Coughing or wheezing") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Dizziness and/or lightheadedness") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Swelling of the throat and vocal cords") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Difficulty breathing") ? 1: 0}, 
            ${req.body.currentSymptoms.includes("Loss of consciousness") ? 1: 0}, 
            ${req.body.currentSeverity}, ${req.body.currentSickStatus.includes("Yes") ? 1: 0}, 
            ${req.body.currentFoodsEaten.includes("Dairy") ? 1: 0}, 
            ${req.body.currentFoodsEaten.includes("Eggs") ? 1: 0}, 
            ${req.body.currentFoodsEaten.includes("Fish/Shellfish") ? 1: 0},
            ${req.body.currentFoodsEaten.includes("Tree nuts") ? 1: 0}, 
            ${req.body.currentFoodsEaten.includes("Peanuts") ? 1: 0}, 
            ${req.body.currentFoodsEaten.includes("Gluten") ? 1: 0}, 
            ${req.body.currentFoodsEaten.includes("Soybeans") ? 1: 0}, 
            ${req.body.currentFoodsEaten.includes("Corn") ? 1: 0}, 
            ${req.body.currentFoodsEaten.includes("Berries") ? 1: 0}, 
            ${req.body.currentFoodsEaten.includes("Celery") ? 1: 0}, 
            ${req.body.currentFoodsEaten.includes("Onions/Garlic") ? 1: 0}, 
            ${req.body.currentFoodsEaten.includes("Sesame") ? 1: 0},
            '${req.body.reactionNotes}'
        )`
  
      console.log(query);
  
      connection.query(query, function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
  });

/* POST profile. */
router.post("/api/profile/:user", function(req, res) {
    const query = `INSERT INTO userProfile 
        (user_id, first_name, last_name 
        , food_Dairy, food_Eggs, food_Fish, food_TreeNuts
        , food_Peanuts, food_Gluten, food_Soybeans, food_Corn, food_Berries, food_Celery
        , food_Onions, food_Sesame) 
        VALUES (${req.params.user}, '${req.body.firstName}', '${req.body.lastName}', 
            ${req.body.foodsAllergicTo.includes("Dairy") ? 1: 0}, 
            ${req.body.foodsAllergicTo.includes("Eggs") ? 1: 0}, 
            ${req.body.foodsAllergicTo.includes("Fish/Shellfish") ? 1: 0},
            ${req.body.foodsAllergicTo.includes("Tree nuts") ? 1: 0}, 
            ${req.body.foodsAllergicTo.includes("Peanuts") ? 1: 0}, 
            ${req.body.foodsAllergicTo.includes("Gluten") ? 1: 0}, 
            ${req.body.foodsAllergicTo.includes("Soybeans") ? 1: 0}, 
            ${req.body.foodsAllergicTo.includes("Corn") ? 1: 0}, 
            ${req.body.foodsAllergicTo.includes("Berries") ? 1: 0}, 
            ${req.body.foodsAllergicTo.includes("Celery") ? 1: 0}, 
            ${req.body.foodsAllergicTo.includes("Onions/Garlic") ? 1: 0}, 
            ${req.body.foodsAllergicTo.includes("Sesame") ? 1: 0}
        )`
  
      console.log(query);
  
      connection.query(query, function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
  });

/* PUT profile. */
router.put("/api/profile/:user", function(req, res) {
    const query = `UPDATE userProfile SET 
        first_name = '${req.body.firstName}', 
        last_name = '${req.body.lastName}', 
        food_Dairy = ${req.body.foodsAllergicTo.includes("Dairy") ? 1: 0}, 
        food_Eggs = ${req.body.foodsAllergicTo.includes("Eggs") ? 1: 0}, 
        food_Fish = ${req.body.foodsAllergicTo.includes("Fish/Shellfish") ? 1: 0}, 
        food_TreeNuts = ${req.body.foodsAllergicTo.includes("Tree nuts") ? 1: 0},
        food_Peanuts = ${req.body.foodsAllergicTo.includes("Peanuts") ? 1: 0}, 
        food_Gluten = ${req.body.foodsAllergicTo.includes("Gluten") ? 1: 0}, 
        food_Soybeans = ${req.body.foodsAllergicTo.includes("Soybeans") ? 1: 0}, 
        food_Corn = ${req.body.foodsAllergicTo.includes("Corn") ? 1: 0}, 
        food_Berries = ${req.body.foodsAllergicTo.includes("Berries") ? 1: 0}, 
        food_Celery = ${req.body.foodsAllergicTo.includes("Celery") ? 1: 0},
        food_Onions = ${req.body.foodsAllergicTo.includes("Onions/Garlic") ? 1: 0}, 
        food_Sesame = ${req.body.foodsAllergicTo.includes("Sesame") ? 1: 0}
        WHERE user_id = ${req.params.user}`

      console.log(query);
  
      connection.query(query, function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
  });

module.exports = router;