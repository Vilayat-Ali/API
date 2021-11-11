const router = require('express').Router();

const {contactUsController  } = require('../controllers/contactus.js');



router.post('/contactus',contactUsController   )


module.exports = router

