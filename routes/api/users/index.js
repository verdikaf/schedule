const express = require('express');
const router = express.Router();
const { auth } = require('../../../secret');
const { validation } = require('./users.validation')
const c = require('./users.controller')
 
router.get('/', auth, c.findAll)
router.get('/:id', auth, c.findById)
router.post('/', auth, validation,  c.insert)
router.put('/:id', auth, validation, c.updateById)
router.delete('/', auth, c.remove)
router.delete('/:id', auth, c.removeById)
 
module.exports = router;