var express = require ('express');
var router = express.Router();
var controlles = require('../controllers/controller');

router.route('/try/userinfo')
.post(controlles.PostUser)
.get(controlles.GetUser);

router.route('/try/GetUserById/:id')
.get(controlles.GetId);

router.route('/try/GetUserByReg/:Reg')
.get(controlles.GetReg)
module.exports = router;