const express = require("express");
const mongoose = require("mongoose");
var multer  = require('multer');
const Post = require("../models/post");
const auth = require('../middlewares/auth');
const app = express();
const router = express.Router();
const productController = require('../controllers/posts')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './videos')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.mp4')
    }
})
var upload = multer({ storage: storage });


//routes
router.post("/uploadPost",[auth],upload.single('post'),productController.uploadProduct);


module.exports = router;