const express = require('express');

const router = express.Router();

//get request routes
router.get('/', (req, res) => {
    res.send('We are on users');
});

//post request routes
router.post('/', (req, res) => {
    res.send('We are on users');
});

//patch request routes(for updating users)
router.patch('/:userId', (req, res) => {
    res.send('We are on usersID');
});

//delete request routes(for deleting users)
router.delete('/:userId', (req, res) => {
    res.send('We are on users');
});





module.exports = router;
