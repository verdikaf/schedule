const { body, param } = require('express-validator');

exports.validation = [
 body('class').isIn,
 body('subject').isIn,
 body('room').isIn,
 body('teacher').isIn, 
]

exports.paramValidation = [
    param('id').isMongoId().withMessage('Invalid Mongo ID')
   ]
   
