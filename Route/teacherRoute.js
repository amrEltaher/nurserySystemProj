const express = require('express');
const router = express.Router();
const conroller = require('./../Controller/teacherController');
const { body } = require('express-validator');
const { insertTeacher } = require('./../MW/validations/teacherValidation');
const validator = require('./../MW/validations/validator');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  }
});
const upload = multer({ storage: storage });

/**
 * @swagger
 * tags:
 *   - name: Teachers
 *     description: API endpoints for managing teachers
 */

router.route('/teachers')
  /**
   * @swagger
   * /teachers:
   *   get:
   *     summary: Retrieve a list of teachers
   *     description: Retrieve a list of all teachers
   *     responses:
   *       '200':
   *         description: A successful response
   */
  .get(conroller.getAllStudent)
  
  /**
   * @swagger
   * /teachers:
   *   post:
   *     summary: Create a new teacher
   *     description: Create a new teacher with the provided details
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               subject:
   *                 type: string
   *     responses:
   *       '201':
   *         description: Teacher created successfully
   */
  .post(upload.single('profile'),insertTeacher, validator, conroller.addStudent);
/**
 * @swagger
 * /teachers:
 *   post:
 *     summary: Create a new teacher
 *     description: Create a new teacher with the provided details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               subject:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Teacher created successfully
 */
  
router.route('/teachers/:id')
  /**
   * @swagger
   * /teachers/{id}:
   *   get:
   *     summary: Retrieve a teacher by ID
   *     description: Retrieve a single teacher by their ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID of the teacher to retrieve
   *         schema:
   *           type: integer
   *     responses:
   *       '200':
   *         description: A successful response
   *       '404':
   *         description: Teacher not found
   */
  .get(conroller.getstudentById)
  
  /**
   * @swagger
   * /teachers/{id}:
   *   delete:
   *     summary: Delete a teacher by ID
   *     description: Delete a single teacher by their ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID of the teacher to delete
   *         schema:
   *           type: integer
   *     responses:
   *       '200':
   *         description: Teacher deleted successfully
   *       '404':
   *         description: Teacher not found
   */
  .delete(conroller.deleteStudent)

  /**
   * @swagger
   * /teachers/{id}:
   *   patch:
   *     summary: Update a teacher by ID
   *     description: Update a single teacher by their ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID of the teacher to update
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               subject:
   *                 type: string
   *     responses:
   *       '200':
   *         description: Teacher updated successfully
   *       '404':
   *         description: Teacher not found
   */
  .patch(upload.single('profile'),conroller.updateStudent);
  //creat swagger documentation in yaml format
  /**
   * @swagger
   * /teachers/{id}:
   *   patch:
   *     summary: Update a teacher by id
   *     description: Update a single teacher by their id
   *     tags:
   *       - Teachers
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: id of teacher
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               subject:
   *                 type: string
   *             example:
   *               name: "John Doe"
   *               subject: "Maths"
   *     responses:
   *       '200':
   *         description: Teacher updated successfully
   *       '404':
   *         description: Teacher not found   
   *       '500':
   *         description: Internal server error
   */
module.exports = router;
