const express  = require('express');
const router = express.Router();
const conroller = require('../Controller/classController');
const { route } = require('./teacherRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
router.route('/classes')
.get(conroller.getAllClasses)
.post(conroller.addClass);

/**
 * @swagger
 * tags:
 *  - name: classes
 *    description: API endpoints for managing classes
 */
router.route('/classes/:id')
.get(conroller.getClassById)
/**
 * @swagger
 * /classes/{id}:
 *   get:
 *     summary: Retrieve a class by id
 *     description: Retrieve a single class by their id
 *     tags: [classes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of class
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: class not found
 *       '500':
 *         description: Internal server error
 */
.patch(conroller.updateClass)
/**
 * @swagger
 * /classes/{id}:
 *   patch:
 *     summary: Update a class by id
 *     description: Update a single class by their id
 *     tags: [classes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of class
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: class updated successfully
 *       '404':
 *         description: class not found
 *       '500':
 *         description: Internal server error
 */
.delete(conroller.deleteClass)
/**
 * @swagger
 * /classes/{id}:
 *   delete:
 *     summary: Delete a class by id
 *     description: Delete a single class by their id
 *     tags: [classes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of class
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: class deleted successfully
 *       '404':
 *         description: class not found
 *       '500':
 *         description: Internal server error
 */


module.exports = router;