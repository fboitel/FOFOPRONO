var express = require('express');
var router = express.Router();
var userModel = require('../models/user');
var pronoModel = require('../models/prono');
const user = require('../models/user');

function handleErr(err, noErr) {
  //console.log(err, noErr);
  if (err == null) {
    return "AJOUT SUCCES";
  }
  if (noErr == null) {
    return "ERREUR LORS DE L'AJOUT";
  }
}

async function manageProno(pseudo, matchId, homeScore, awayScore, cb) {

  if (homeScore == null || awayScore == null || homeScore == "" || awayScore == "" ) {
    return "NOT FILLED";
  }

  var userId = await userModel.find({ pseudo: pseudo }).select('_id');

  userId = userId[0]._id

  //onsole.log("iddddd " + userId);


  pronoDetail = { matchId: matchId, userId: userId, homeScore: homeScore, awayScore: awayScore };

  const findProno = await pronoModel.find({ matchId: matchId, userId: userId });

  //console.log(findProno);


  if (findProno[0] == undefined) {
    var prono = new pronoModel(pronoDetail);
    //console.log(prono);
    await prono.save(function (err) {
      if (err) {
        return cb(err, null);
      }
    });
    return "SUCCESd";
  }

  if (findProno[0].homeScore == homeScore && findProno[0].awayScore == awayScore){
    return "SUCCEZZ";
  }

  else {
    await pronoModel.updateOne({ matchId: matchId, userId: userId }, {
      $set: { homeScore: homeScore, awayScore: awayScore }
    });
    return "SUCCESz";
  }
}

async function fillExistingProno(pronoReq){

  //console.log(pronoReq.userPseudo);

  var userId = await userModel.find({ pseudo: pronoReq.userPseudo }).select('_id');
  userId = userId[0]._id

  pronoReq.apiMatchResponse.map(async (item, index) => {
    var p = await pronoModel.find({userId: userId, matchId: item._id});
    if (p[0] != undefined){
      pronoReq.homeScore[index] = p[0].homeScore;
      pronoReq.awayScore[index] = p[0].awayScore;
      console.log("HEREEEEE");
    //console.log(pronoReq);
    // console.log(item);
    console.log(p[0]);
    }
  })

}


async function f(req, res, next) {

  let succes = "YES";

  //console.log(req.body.filledMatch.length);

  for (let i = 0; i < req.body.filledMatch.length; i++) {
    if (req.body.filledMatch[i] != undefined) {
      let aj = await manageProno(req.body.userPseudo, req.body.filledMatch[i]._id, req.body.homeScore[i], req.body.awayScore[i], handleErr)
      console.log("ALORS? " + aj)
      if (aj == "ERREUR LORS DE L'AJOUT") {
        succes = "NO";
        break;
      }

    }
  }

  await fillExistingProno(req.body);
  req.body.apiPronoResponse = succes
  setTimeout(() => console.log(req.body), 500);
  setTimeout(() => res.send(JSON.stringify(req.body)), 500);
}


router.post('/', f);


module.exports = router;


