const express = require('express');
const router = express.Router();
const conroller = require('../Controller/childController');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const multer = require('multer');const storage = multer.diskStorage({
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
 *   name: Childs
 *   description: API endpoints for managing childs
 */
router.route('/childs')
.get(conroller.getAllChilds)
/**
 * @swagger
 * /childs:
 *   get:
 *     summary: Retrieve a list of childs
 *     description: Retrieve a list of all childs
 *     responses:
 *       '200':
 *         description: A successful response
 */
  .post(upload.single('profile'),conroller.addChild);
  /**
   * @swagger
   * /childs:
   * post:
   * summary: Create a new child
   * description: Create a new child with the provided details
   * requestBody:
   * required: true
   * content:
   * application/json:
   * schema:
   * type: object
   * properties:
   * name:
   * type: string
   * age:
   * type: integer
   * profile:
   * type: string
   * example:
   * name: "Rahul"
   * age: 12
   * profile: "image.jpg"
   * responses:
   * '201':
   * description: Child created successfully
*/
router.route('/childs/:id')
  .get(conroller.deleteChildById)
  /**
   * @swagger
   * /childs/{id}:
   * get:
   * summary: Retrieve a child
   * description: Retrieve a child
   * tags: [Childs]
   * parameters:
   * - in: path
   * name: id
   * required: true
   * description: id of child
   * schema:
   * type: integer
   * responses:
   * 200:
   * description: A successful response
   * 404:
   * description: Child not found
   * 500:
   * description: Internal server error
   */
  .delete(conroller.deleteChildById)
  /**
   * @swagger
   * /childs/{id}:
   * delete:
   * summary: Delete a child
   * description: Delete a child
   * tags: [Childs]
   * parameters:
   * - in: path
   * name: id
   * required: true
   * description: id of child
   * schema:
   * type: integer
   * responses:
   * 200:
   * description: Child deleted successfully
   * 404:
   * description: Child not found
   * 500:
   * description: Internal server error
   */
  .patch(conroller.updateChild);
  /**
   * @swagger
   * /childs/{id}:
   * patch:
   * summary: Update a child
   * description: Update a child
   * tags: [Childs]
   * parameters:
   * - in: path
   * name: id
   * required: true
   * description: id of child
   * schema:
   * type: integer
   * requestBody:
   * required: true
   * content:
   * application/json:
   * schema:
   * type: object
   * properties:
   * name:
   * type: string
   * age:
   * type: integer
   * profile:
   * type: string
   * example:
   * name: "Rahul"
   * age: 12
   * profile: "image.jpg"
   * responses:
   * 200:
   * description: Child updated successfully
   * 404:
   * description: Child not found
   * 500:
   * description: Internal server error
   */




  module.exports = router;