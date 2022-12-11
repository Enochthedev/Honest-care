const express = require('express');

const router = express.Router();


const User = require('../models/Users');



//routes
router.post('/signup', (req, res) => { 
    console.log(req.body);
    res.sendStatus(200);
});

router.post('/login', (req, res) => {  
    res.send('We are on login');
});



module.exports = router;
