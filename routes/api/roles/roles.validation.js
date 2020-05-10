const { body, param } = require('express-validator');

exports.validation = [
 body('name').escape(),
 body('name_long').isLength({min:1, max:50}).escape(),
 body('priority').isInt,
 body('description').isLength({min:1, max:100}).escape(), 
]

exports.paramValidation = [
    param('id').isMongoId().withMessage('Invalid Mongo ID')
   ]
   
