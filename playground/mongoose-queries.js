const {mongoose} = require('./../db/mongoose')
const {Prediction} = require('./../db/models/prediction')
const {ObjectID} = require('mongodb')

const id = "5ba26793b8c9c8035213b7444";


(async function() {
    if (!ObjectID.isValid(id)) {
        console.log('Id is invalid');
        return;
    }

    const prediction = await Prediction.findById(id);
    if (!prediction) {
        console.log('Unable to find prediction by id.');
        return
    }

    console.log('Prediction found from id:', prediction);
})()