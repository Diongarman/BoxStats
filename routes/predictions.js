const express = require('express');
const router = express.Router();
const {Prediction} = require('./../db/models/prediction');
const {ObjectID} = require('mongodb')



router.post('/', async (req, res) => {
    const newPrediction = new Prediction({
        winner: req.body.winner,
        outcome: req.body.outcome,
        round: req.body.round,
        pointsWon: req.body.pointsWon,
        status: req.body.status
    });

    try {
        const result = await newPrediction.save();
        res.send(result)
    } catch (e) {
        res.status(400).send(e)
    }
    //res.send()
})


router.get('/', async (req, res) => {

    try {
        const predictions = await Prediction.find({});
        res.send({predictions})
    } catch (e) {
        res.status(400).send(e)
    }
    
})

router.get('/:id', async (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(400).send('Invalid ID')
    }

    try {
        const prediction = await Prediction.findById(id);

        if (!prediction) {
            return res.status(404).send('User with that ID cannot be found in database.')
        }
        
        res.send({prediction});

    } catch (e) {
        res.status(400).send({})
    }
})

module.exports = router;

