var express = require('express');
var router = express.Router();
var matchModel = require('../models/match');
var userModel = require('../models/user');
var pronoModel = require('../models/prono');

function giveCoeff(trueH, trueA, guessH, guessA){
    if (trueH == guessH && trueA == guessA){
        return 2;
    }
    if (trueH == trueA && guessH == guessA){
        return 1;
    }
    return (trueH - trueA ) * (guessH - guessA) > 0 ? 1 : 0;

}

async function updateMatch(matchId, homeScore, awayScore){
    if (homeScore == null || awayScore == null || homeScore == "" || awayScore == "" ) {
        return "NOT FILLED";
    }

    console.log(matchId + homeScore + awayScore);

    await matchModel.updateOne({ _id: matchId}, {
        $set: { homeScore: homeScore, awayScore: awayScore }
      });
      
    return "FILLED";
}


async function givePoints(matchId, homeScore, awayScore){
    if (homeScore == null || awayScore == null || homeScore == "" || awayScore == "" ) {
        return "NOT UPDATED";
    }

    const match = await matchModel.find({_id: matchId}).select('type');
    const matchType = match[0].type;

    const pronos = await pronoModel.find({matchId: matchId}).select('homeScore awayScore userId');

    
    pronos.map(async (item) => {
        const userId = item.userId;
        const coeff = giveCoeff(homeScore, awayScore, item.homeScore, item.awayScore);
        let val = 0;
        switch(matchType){
            case "group stage":
                val = 8;
                break;
            case "round of 16":
                val = 12;
                break;
            case "quarter-finals":
                val = 16;
                break;
            case "semi-finals":
                val = 20;
                break;
            case "final":
                val = 25;
                break;
            default:
                break;
        }
        const userP = await userModel.find({_id: userId}).select('points');
        const newPoints = userP[0].points + coeff*val;
        await userModel.updateOne({ _id: userId}, {
            $set: { points: newPoints}
          });
    });
    return "UPDATED"
}

//TODO : put async/await instead of setTimout
async function f(req, res, next) {
    
    //const data = await matchModel.find().select('home_team away_team home_score away_score date _id');
    console.log(req.body);
    const a = await updateMatch(req.body.matchId, req.body.homeScore, req.body.awayScore);
    const b = await givePoints(req.body.matchId, req.body.homeScore, req.body.awayScore);
    console.log(a);
    res.send(a + " & " + b);      
}


router.post('/', f);


module.exports = router;


