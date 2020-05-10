const { body, param } = require('express-validator');
const { findByName } = require('./subjects.controller')

exports.validation = [
 body('name').custom(value => {
    return findByName(value).then(user => {
      if(user){
        return Promise.reject('Name sudah terdaftar')
      }
    })
  }),
]

exports.paramValidation = [
    param('id').isMongoId().withMessage('Invalid Mongo ID')
   ]
   
