const express = require('express');
const router = express.Router();
const {Prediction} = require('./../db/models/prediction');


router.post('/', async (req, res) => {
    const newPrediction = new Prediction({
        winner: req.body.winner,
        outcome: req.body.outcome,
        round: req.body.round,
        pointsWon: req.body.pointsWon
    });

    try {
        const result = await newPrediction.save();
        res.send(result)
    } catch (e) {
        res.status(400).send(e)
    }
    //res.send()
})

module.exports = router;

