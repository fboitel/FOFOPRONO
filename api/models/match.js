var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var MatchSchema = new Schema(
  {
    homeTeam: {type: String, enum: ["FRANCE", "BRESIL", "ITALIE"], required: true},
    awayTeam: {type: String, enum: ["FRANCE", "BRESIL", "ITALIE"], required: true},
    homeScore: {type: Number, min: 0, defaut: 0},
    awayScore: {type: Number, min: 0, defaut: 0},
    type: {type: String, enum:["group stage", "round of 16", "quarter-finals", "semi-finals", "final"], required: true},
    date: {type: Date},
  }
);


//Export model
module.exports = mongoose.model('match', MatchSchema);
