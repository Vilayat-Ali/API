const router = require('express').Router();

const {subscriberController } = require('../controllers/subscriber.js');






router.post('/subscribe',subscriberController  )


module.exports = router

