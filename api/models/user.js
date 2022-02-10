var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var UserSchema = new Schema(
  {
    first_name: {type: String, required: true, defaut: ''},
    family_name: {type: String, required: true, defaut: ''},
    pseudo: {type: String, required: true, defaut: ''},
    mdp: {type: String, required: true, defaut: ''},
    points: {type: Number, default: 0, min: 0}
  }
);


//Export model
module.exports = mongoose.model('user', UserSchema);
