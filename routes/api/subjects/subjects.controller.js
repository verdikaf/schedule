const Subjects = require('./subjects.schema')
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
    Subjects.find(where)
    .limit(req.query.limit || 0)
    .skip(req.query.skip || 0)
    .then(subjects => {
       res.json(subjects);
    })
    .catch(err => next(err));
}

exports.findById = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
    const id = req.params.id
    Subjects.findById(id)
    .then(subjects => {
       res.json(subjects);
    })
    .catch(err => next(err));
}
    
exports.insert = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
    const data = req.body;
    Subjects.create(data)
    .then(subjects => {
       res.json({
         message: `New subject added!`,
         data: subjects
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
    Subjects.findByIdAndUpdate(id, data)
    .then(subjects => {
       res.json({
         message: `subject ${id} updated!`,
         data: subjects
       });
    })
    .catch(err => next(err))
}
    
exports.remove = (req, res, next) => {
    Subjects.remove()
    .then(subjects => {
       res.json({
         message: 'All subjects removed!',
         data: subjects
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
    Subjects.findByIdAndRemove(id)
    .then(subjects => {
       res.json({
         message: `subject ${id} removed!`,
         data: subjects
       });
    })
    .catch(err => next(err))
}

exports.findByName = (value) => {
  return Rooms.findOne({$or: [{ name: value}]})
 }
   