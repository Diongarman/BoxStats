const request = require('supertest')
const expect = require('expect')
const {app} = require('./../index')
const {Prediction} = require('./../db/models/prediction')

beforeEach((done) => {
    Prediction.deleteMany({}).then(() => {
        done();
    })
})

describe('POST /api/predictions', () => {
    it('should create new prediction', (done) => {
    let winner = 'Alexander Povetkin';
    let outcome = 'KO/TKO';
    let round = 5;
  
    request(app)
        .post('/api/predictions')
        .send({winner, outcome, round})
        .expect(200)
        .expect((res) => {
            expect(res.body.winner).toBe(winner);
            expect(res.body.outcome).toBe(outcome);
            expect(res.body.round).toBe(round);
        })
        .end(async (err, res) => {
            if (err) {
                return done(err)
            }
            let predictions = await Prediction.find();

            try {
                expect(predictions.length).toBe(1);
                expect(predictions[0].winner).toBe(winner);
                expect(predictions[0].outcome).toBe(outcome);
                expect(predictions[0].round).toBe(round);
                done();

            } catch (e) {
                done(e);
            }
        });
    })




    it('should not create a prediction with invalid body data', (done) => {
        let winner = 'Anthony Joshua';
        let outcome = 'KO/TKO';
      
        request(app)
            .post('/api/predictions')
            .send({winner, outcome})
            .expect(400)
            .end(async (err, res) => {
                if (err) {
                    return done(err)
                }
                let predictions = await Prediction.find();
    
                try {
                    expect(predictions.length).toBe(0);
                    done();
    
                } catch (e) {
                    done(e);
                }
            });
        })
})