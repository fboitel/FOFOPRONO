
var express = require('express');
var router = express.Router();
var userModel = require('../models/user');

/* GET  match page. */

async function findUser(pseudo, mdp) {
    
  console.log(pseudo, mdp);

    const data = await userModel.find({pseudo: pseudo});
    if (data[0] == undefined){
      return "PSEUDO INCONNU"
    }

    const dataPseudo = await userModel.find({pseudo: pseudo, mdp: mdp});
    if (dataPseudo[0] == undefined){
      return "MOT DE PASSE INVALIDE"
    }

    return "CONNECTE(E)";
  }


async function f(req, res, next) {

    const succes = await findUser(req.body.pseudo, req.body.mdp)
    console.log(succes);
    res.send(succes);      
}


router.post('/', f);


module.exports = router;

