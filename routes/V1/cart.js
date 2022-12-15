const express = require('express');

const router = express.Router();

//cart routes
router.get('/', (req, res) => {
    res.send('We are on cart');
});

//post request routes
router.post('/add', (req, res) => {
    res.send('We are adding to the cart');
});




module.exports = router;