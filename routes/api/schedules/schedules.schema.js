const { Schema, model } = require('../../../db.config')
const schema = new Schema({
 day:{
   type: String,
   required: true,
 },
 timeStart:{
   type: String,
   required: true,
 },
 timeEnd:{
   type: String,
   required: true,
 },
 class: {
   type: Schema.Types.ObjectId,
   ref: 'Classes', select:true
 },
 subject: {
   type: Schema.Types.ObjectId,
   ref: 'Subjects', select:true
 },
 room: {
   type: Schema.Types.ObjectId,
   ref: 'Rooms', select:true
 },
 teacher: {
   type: Schema.Types.ObjectId,
   ref: 'Users', select:true
 },
}, {
 timestamps: true
});
module.exports = model('Schedules', schema, 'schedules');
