const {body,query,param} = require('express-validator')

exports.insertclass = [
  body('name').not().isEmpty().withMessage('Class name is required'),
  body('teacher').not().isEmpty().withMessage('Class teacher is required'),
]
