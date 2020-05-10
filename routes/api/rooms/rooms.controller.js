const Rooms = require('./rooms.schema')
const passwordHash = require('password-hash');
const createError = require('http-errors')
 
exports.login = (username, password)=>{
 return new Promise((resolve, reject)=>{
     Users.findOne({ username })
     .select('_id password username role')
     .populate('role')
     .then((foundUser)=>{
         if(!foundUser) return reject(createError(400, 'Username not found!'))
         const hashedPassword = foundUser.password
         const isValidPassword = passwordHash.verify(password, hashedPassword)
         if (isValidPassword) {
           resolve(foundUser)
         } else {
           reject(createError(400, 'Wrong Password!'))
         }
     })
 })
}
 
exports.findAll = (req, res, next) => {
    const q = req.query;
    const where  = {}
    if(q.name) where['name'] = q.name;
    Rooms.find(where)
    .limit(req.query.limit || 0)
    .skip(req.query.skip || 0)
    .then(rooms => {
       res.json(rooms);
    })
    .catch(err => next(err));
}

exports.findById = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
    const id = req.params.id
    Rooms.findById(id)
    .then(rooms => {
       res.json(rooms);
    })
    .catch(err => next(err));
}
    
exports.insert = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
    const data = req.body;
    Rooms.create(data)
    .then(rooms => {
       res.json({
         message: `New room added!`,
         data: rooms
       });
    })
    .catch(err => next(err))
}
    
exports.updateById = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
    const id = req.params.id
    const data = req.body
    Rooms.findByIdAndUpdate(id, data)
    .then(rooms => {
       res.json({
         message: `room ${id} updated!`,
         data: rooms
       });
    })
    .catch(err => next(err))
}
    
exports.remove = (req, res, next) => {
    Rooms.remove()
    .then(rooms => {
       res.json({
         message: 'All rooms removed!',
         data: rooms
       });
    })
    .catch(err => next(err))
}
    
exports.removeById = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
    const id = req.params.id
    Rooms.findByIdAndRemove(id)
    .then(rooms => {
       res.json({
         message: `room ${id} removed!`,
         data: rooms
       });
    })
    .catch(err => next(err))
}

exports.findByName = (value) => {
  return Rooms.findOne({$or: [{ name: value}]})
 }
   