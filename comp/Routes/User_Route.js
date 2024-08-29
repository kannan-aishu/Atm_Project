const express = require('express');
const {created_User,Get_Users}= require('../Conroller/User_Conroller');

const router = express.Router();
router.post('/create_users',created_User);
router.get('/get_users',Get_Users);

module.exports = router;
