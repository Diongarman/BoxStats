const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/BoxStatsApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }

    console.log('Connected to the MongoDB server.');
    
    
    const db = client.db('BoxStatsApp');

    db.collection('Predictions').findOneAndUpdate({
        winner: 'Saul Alvarez'
    }, {
        $set: {
            winner: 'Gennady Golovkin'
        }
    }, {
        returnOriginal: false
    }
).then((result) => {
    console.log(result);
})







    //client.close()
})