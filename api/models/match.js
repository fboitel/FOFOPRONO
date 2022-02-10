var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var MatchSchema = new Schema(
  {
    home_team: {type: String, enum: ["FRANCE", "BRESIL", "ITALIE"], required: true},
    away_team: {type: String, enum: ["FRANCE", "BRESIL", "ITALIE"], required: true},
    home_score: {type: Number, min: 0, defaut: 0},
    away_score: {type: Number, min: 0, defaut: 0},
    type: {type: String, enum:["group stage", "round of 16", "quarter-finals", "semi-finals", "final"], required: true},
    date: {type: Date},
  }
);


//Export model
module.exports = mongoose.model('match', MatchSchema);
