const express = require('express');
const router = express.Router();
const childconroller = require('../Controller/childController');
const teacherController = require('../Controller/teacherController');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
/**
 * @swagger
 * tags:
 *  - name: changePassword
 *    description: API endpoints for changing password
 */
router.route('/childs/:id')
.patch(childconroller.changePassword);

/**
 * 
 * @swagger
 * tags:
 *  - changePassword
 * paths:
 *  /childs/{id}:
 *    patch:
 *      summary: Change password of child
 *      description: Change password of child
 *      tags: [changePassword]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of child
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                password:
 *                  type: string
 *                  example: "password"
 *      responses:
 *        '200':
 *          description: Password changed successfully
 *        '404':
 *          description: Child not found
 *        '500':
 *          description: Internal server error
 */

router.route('/teachers/:id')
.patch(teacherController.changePassword);

/**
 * 
 * @swagger
 * paths:
 *  /teachers/{id}:
 *    patch:
 *      summary: Change password of teacher
 *      description: Change password of teacher
 *      tags: [changePassword]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of teacher
 *          schema:
 *            type: integer
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                password:
 *                  type: string
 *                  example: "123456"
 *      responses:
 *        '200':
 *          description: Password changed successfully
 *        '404':
 *          description: Teacher not found
 *        '500':
 *          description: Internal server error
 */


module.exports = router;

// /**
//  * @swagger
//  * tags:
//  *  name: changePassword
//  * description: API endpoints for changing password
//  */
// router.route('/childs/:id')
// .patch(childconroller.changePassword);

// /**
//  * 
//  * @swagger
//   * tags:changePassword
//   * /childs/{id}:
//   *  patch:
//   *   summary: Change password of child
//   *  description: Change password of child
//   * tags: [changePassword]
//   * parameters:
//   * - in: path
//   *  name: id
//   * required: true
//   * description: id of child
//   * schema:
//   * type: integer
//   * requestBody:
//   * required: true
//   * content:
//   * application/json:
//   * schema:
//   * type: object
//   * properties:
//   * password:
//   * type: string
//   * example:
//   * password: "
//   * responses:
//   * 200:
//   * description: Password changed successfully
//   * 404:
//   * description: Child not found
//   * 500:
//   * description: Internal server error
//   */

// router.route('/teachers/:id')
// .patch(teacherController.changePassword);

// /**
//  * 
//  * @swagger
//   * /teachers/{id}:
//   *  patch:
//   *  summary: Change password of teacher
//   * description: Change password of teacher
//   * tags: [changePassword]
//   * parameters:
//   * - in: path
//   *  name: id
//   * required: true
//   * description: id of teacher
//   * schema:
//   * type: integer
//   * requestBody:
//   * required: true
//   * content:
//   * application/json:
//   * schema:
//   * type: object
//   * properties:
//   * password:
//   * type: string
//   * example:
//   * password: "123456"
//   * responses:
//   * 200:
//   * description: Password changed successfully
//   * 404:
//   * description: Teacher not found
//   * 500:
//   * description: Internal server error
//   */


// module.exports = router;
