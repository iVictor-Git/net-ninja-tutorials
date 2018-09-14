const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Deleting records', () => {
    // create tests

    var char;
    // Changing up the code a bit
    // in order to delete a record, we must make one
    // in connect.js, we drop the collection before each test
    // so we put this here to make sure we are adding something to the collection before our test runs
    beforeEach(done => {
        char = new MarioChar({
            name: 'Mario'
        });

        // save is async
        char.save() // saves directly to the db
            .then(() => {
                assert(char.isNew === false); // not sure why I can't just negate the result of isNew
                done(); // because it is async, we need to tell mocha the test is done
            })
            .catch(err => {});
    });

    // it creates a single test
    it('Delete 1 record from the database', done => {
        MarioChar.findOneAndRemove({
            name: 'Mario'
        })
            .then(() => {
                MarioChar.findOne({
                    name: 'Mario'
                })
                    .then(result => {
                        assert(!result);
                        done();
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });
});
