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
router.route('/childs')
.get(conroller.getAllChilds)
  .post(upload.single('profile'),conroller.addChild);

router.route('/childs/:id')
  .get(conroller.deleteChildById)
  .delete(conroller.deleteChildById)
  .patch(conroller.updateChild);




  module.exports = router;