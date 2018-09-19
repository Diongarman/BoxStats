const express = require('express');
const router = express.Router();

const {User} = require('./../db/models/user');

module.exports = router;

router.post('/', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email
    });

    try {
        const result = await newUser.save();
        res.send(result)
    } catch (e) {
        res.status(400).send(e)
    }
})


