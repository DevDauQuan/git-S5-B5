var express = require('express');
var router = express.Router();
const { createUser, getUsers } = require("../controller/userCtrl")


router.get('/all-users', getUsers);
router.post('/register', createUser);

module.exports = router;
