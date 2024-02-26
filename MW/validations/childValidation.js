const {body,query,param} = require('express-validator')

exports.insertchild = [
  body('name').not().isEmpty().withMessage('Name is required'),
  body('age').not().isEmpty().withMessage('Age is required'),
  body('gender').not().isEmpty().withMessage('Gender is required'),
]