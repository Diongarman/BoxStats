const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/BoxStatsApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }

    console.log('Connected to the MongoDB server.');
    
    
    const db = client.db('BoxStatsApp');

    db.collection('Users').find({isAdmin: true}).toArray().then((docs) => {
        console.log('Fights')
        console.log(JSON.stringify(docs, undefined, 2))
    }).catch((err) => {
        console.log('unable to fet fights', err)
    })







    //client.close()
})