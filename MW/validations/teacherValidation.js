const {body,query,param} = require('express-validator');
exports.insertTeacher = [
  //body('id').isInt().withMessage('id must be an integer'),
  body('name').notEmpty().withMessage('name must provided'),
  body('email').isEmail().withMessage('email must be well-formed'),
  body('password').isString().withMessage('address must be a string'),
  body('image').isString().withMessage('phone must be a string')
]