const { Schema, model } = require('../../../db.config')
const schema = new Schema({
 name:{
   type: String,
   required: true,
   unique: true,
 },
}, {
 timestamps: true
});
module.exports = model('Subjects', schema, 'subjects');
