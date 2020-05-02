const { Schema, model } = require('../../../db.config')
const schema = new Schema({
 name:{
   type: String,
   required: true,
   unique: true,
 },
 grade:{
   type: String,
   required: true,
 },
 major:{
   type: String,
   required: true,
 },
}, {
 timestamps: true
});
module.exports = model('Classes', schema, 'classes');