const Schedules = require('./schedules.schema')
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
    if(q.day) where['day'] = q.day;
    Schedules.find(where)
    .limit(req.query.limit || 0)
    .skip(req.query.skip || 0)
    .populate('class')
    .populate('subject')
    .populate('room')
    .populate('teacher')
    .then(schedules => {
       res.json(schedules);
    })
    .catch(err => next(err));
}
    
exports.findById = (req, res, next) => {
    const id = req.params.id
    Schedules.findById(id)
    .populate('class')
    .populate('subject')
    .populate('room')
    .populate('teacher')
    .then(schedules => {
       res.json(schedules);
    })
    .catch(err => next(err));
}
    
exports.insert = (req, res, next) => {
    let data = req.body;
    Schedules.create(data)
    .then(schedules => {
       res.json({
         message: `New schedule added!`,
         data: schedules
       });
    })
    .catch(err => next(err))
}
    
exports.updateById = (req, res, next) => {
    const id = req.params.id
    let data = req.body
    Schedules.findByIdAndUpdate(id, data)
    .then(schedules => {
       res.json({
         message: `schedules ${id} updated!`,
         data: schedules
       });
    })
    .catch(err => next(err))
}
    
exports.remove = (req, res, next) => {
    Schedules.remove()
    .then(schedules => {
       res.json({
         message: 'All Schedules removed!',
         data: schedules
       });
    })
    .catch(err => next(err))
}
    
exports.removeById = (req, res, next) => {
    const id = req.params.id
    Schedules.findByIdAndRemove(id)
    .then(schedules => {
       res.json({
         message: `Schedule ${id} removed!`,
         data: schedules
       });
    })
    .catch(err => next(err))
   }