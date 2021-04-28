const express  = require('express');
const router = express.Router();

// @route    GET api/auth
// @desc     Get logged in a user
// @acces    Private
router.get('/', (req, res) => {
    res.send('Get logged in a user')
});

// @route    POST api/auth
// @desc     Auth user & get token
// @acces    Public
router.post('/', (req, res) => {
    res.send('Log in a user')
});

module.exports = router;