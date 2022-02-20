var express = require('express');
var router = express.Router();
var matchModel = require('../models/match');

/* GET  match page. */

//TODO : put async/await instead of setTimout
async function f(req, res, next) {
    
    const data = await matchModel.find().select('homeTeam awayTeam homeScore awayScore type date _id');
    console.log(data);
    res.json(data);      
}


router.get('/', f);


module.exports = router;


