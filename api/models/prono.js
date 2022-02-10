var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var PronoSchema = new Schema(
  {
    id_match: {type: Schema.Types.ObjectId, ref: 'match', required: true},
    id_user: {type: Schema.Types.ObjectId, ref: 'user', required: true},
    home_score: {type: Number, min: 0},
    away_score: {type: Number, min: 0},
  }
);


//Export model
module.exports = mongoose.model('prono',PronoSchema);
