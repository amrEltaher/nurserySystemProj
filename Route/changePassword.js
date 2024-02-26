const express = require('express');
const router = express.Router();
const childconroller = require('../Controller/childController');
const teacherController = require('../Controller/teacherController');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

router.route('/childs/:id')
.patch(childconroller.changePassword);

router.route('/teachers/:id')
.patch(teacherController.changePassword);
module.exports = router;
