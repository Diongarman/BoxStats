let mongoose = require('mongoose');

const PredictionSchema = new mongoose.Schema({

    winner: {
        type: String,
        required: true
    },
    outcome: {
        type: String,
        enum: ['DECISION', 'KO/TKO'],
        required: function () {
            return this.winner !== 'draw'
        }
    },
    round: {
        type: Number,
        required: function () {
            return this.outcome === 'KO/TKO'
        }
    },
    status: {
        type: String,
        enum: ['pending', 'resolved', 'postponed'],
        default: 'pending',
        required: true
    },
    pointsWon: {
        type: Number,
        default: 0
    }


});

let Prediction = mongoose.model('Prediction', PredictionSchema);

module.exports = {Prediction};
