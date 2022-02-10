var express = require('express');
var router = express.Router();
var userModel = require('../models/user');

/* GET  match page. */

function handleErr(err, noErr){
  //console.log(err, noErr);
  if (err == null){
    return "AJOUT REALISE AVEC SUCCES";
  }
  if (noErr == null){
    return "ERREUR LORS DE L'AJOUT";
  }
}


async function userCreate(first_name, family_name, pseudo, mdp, cb) {
    userdetail = {first_name:first_name , family_name:family_name, pseudo:pseudo, mdp: mdp, points:0}
    
    var user = new userModel(userdetail);
    
    if (first_name == ""){
      return "VEUILLEZ SAISIR VOTRE PRENOM";
    }

    if (family_name == ""){
      return "VEUILLEZ SAISIR VOTRE NOM";
    }

    if (pseudo == ""){
      return "VEUILLEZ SAISIR VOTRE PSEUDO";
    }

    if (mdp == ""){
      return "VEUILLEZ SAISIR VOTRE MOT DE PASSE";
    }

    //console.log(user);

    const data = await userModel.find({first_name: first_name, family_name: family_name});
    if (data[0] != undefined){
      return "UTILISATEUR DEJA ENREGISTRE"
    }

    const dataPseudo = await userModel.find({pseudo: pseudo});
    if (dataPseudo[0] != undefined){
      return "PSEUDO DEJA PRIS"
    }

    await user.save(function (err) {
      if (err) {
        return cb(err, null);
      }
    } );
    return "CONNECTE(E)";
  }


async function f(req, res, next) {

    const succes = await userCreate(req.body.first_name, req.body.family_name, req.body.pseudo, req.body.mdp, handleErr)
    //console.log(succes);
    res.send(succes);      
}


router.post('/', f);


module.exports = router;


