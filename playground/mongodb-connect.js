const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/BoxStatsApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }

    console.log('Connected to the MongoDB server.');
    const db = client.db('BoxStatsApp');

    // db.collection('Users').insertOne({
    //     username: 'EddieHearn69',
    //     email:'matchroom@gmail.com',
    //     country: 'UK',
    //     isAdmin: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert User', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })


    // db.collection('Predictions').insertOne({
    //     winner: 'Saul Alvarez',
    //     outcome: 'DECISION',
    //     status: 'pending',
    //     pointsWon: null
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert User', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Fights').insertOne({
    //     A: 'Saul Alvarez',
    //     B: 'Gennady Golovkin',
    //     outcome: null,
    //     promoter: ['Golden Boy Promotions', '360/GGG/K2 Promotions'],
    //     venue: 'T-Mobile Arena',
    //     location: 'Las Vegas, Nevada, USA',
    //     date: 1537056000,
    //     isChampionship: true,
    //     broadcaster: 'HBO'
    


    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Fight', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Boxers').insertOne({
    //     name: "Saul Alvarez",
    //     sex: 'male',
    //     nationality: 'Mexico',
    //     DOB: 648259200,
    //     fightList: [],
    //     weightClass: 'middleweight',
    //     status: 'active',
    //     titles: []
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Boxer', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    // db.collection('Boxers').insertOne({
    //     name: "Gennady Golovkin",
    //     sex: 'male',
    //     nationality: 'Kazakhstan',
    //     DOB: 387072000,
    //     fightList: [],
    //     weightClass: 'middleweight',
    //     status: 'active',
    //     titles: ['WBA', 'WBC']
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Boxer', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    client.close()
})