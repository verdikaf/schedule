const Classes = require('./classes.schema')
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
    if(q.grade) where['grade'] = q.grade;
    if(q.major) where['major'] = q.major;
    Classes.find(where)
    .limit(req.query.limit || 0)
    .skip(req.query.skip || 0)
    .then(classes => {
       res.json(classes);
    })
    .catch(err => next(err));
}

exports.findById = (req, res, next) => {
    const id = req.params.id
    Classes.findById(id)
    .then(classes => {
       res.json(classes);
    })
    .catch(err => next(err));
}
    
exports.insert = (req, res, next) => {
    const data = req.body;
    Classes.create(data)
    .then(classes => {
       res.json({
         message: `New class added!`,
         data: classes
       });
    })
    .catch(err => next(err))
}
    
exports.updateById = (req, res, next) => {
    const id = req.params.id
    const data = req.body
    Classes.findByIdAndUpdate(id, data)
    .then(classes => {
       res.json({
         message: `class ${id} updated!`,
         data: classes
       });
    })
    .catch(err => next(err))
}
    
exports.remove = (req, res, next) => {
    Classes.remove()
    .then(classes => {
       res.json({
         message: 'All classes removed!',
         data: classes
       });
    })
    .catch(err => next(err))
}
    
exports.removeById = (req, res, next) => {
    const id = req.params.id
    Classes.findByIdAndRemove(id)
    .then(classes => {
       res.json({
         message: `class ${id} removed!`,
         data: classes
       });
    })
    .catch(err => next(err))
}
   