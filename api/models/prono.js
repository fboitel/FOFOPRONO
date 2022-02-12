var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var PronoSchema = new Schema(
  {
    matchId: {type: Schema.Types.ObjectId, ref: 'match', required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'user', required: true},
    homeScore: {type: Number, min: 0},
    awayScore: {type: Number, min: 0},
  }
);


//Export model
module.exports = mongoose.model('prono',PronoSchema);
