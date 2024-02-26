const express  = require('express');
const router = express.Router();
const conroller = require('../Controller/classController');
const { route } = require('./teacherRoute');
router.route('/classes')
.get(conroller.getAllClasses)
.post(conroller.addClass);

router.route('/classes/:id')
.get(conroller.getClassById)
.patch(conroller.updateClass)
.delete(conroller.deleteClass);





module.exports = router;