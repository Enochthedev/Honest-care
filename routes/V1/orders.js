const express = require('express');

const router = express.Router();

//cart routes
router.get('/', (req, res) => {
    res.send('We are on cart');
});

//post request routes
router.post('/', (req, res) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }  
    res.status(201).json({
        message: 'orders were created',
        order: order
    });
});




module.exports = router;