var express = require('express');
var router = express.Router();
var userModel = require('../models/user');

/* GET  match page. */

//TODO : put async/await instead of setTimout
async function f(req, res, next) {
    
    const data = await userModel.find().select('pseudo points');
    console.log(data);
    res.json(data);      
}


router.get('/', f);


module.exports = router;
