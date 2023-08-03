const {checkController, bookController}  = require('../controllers/facilityController')
const router = require('express').Router();

// API endpoint to check facility availability
router.post('/check-availability', checkController);

// API endpoint to book a facility
router.post('/book-facility', bookController);

module.exports = router;