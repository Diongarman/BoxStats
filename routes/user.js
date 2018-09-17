const express = require('express');
const router = express.Router();

const {User} = require('./../db/models/user');

module.exports = router;

router.post('/', async (req, res) => {
    const newUser = new User({
        username: 'GenrlW234',
        email: 'mj@gmail.com'
    });

    try {
        const result = await newUser.save();
        console.log(result);
    } catch (e) {
        console.log(`Unable to save user: ${e.message}`)
    }
})


