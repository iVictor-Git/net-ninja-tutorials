const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Updating records', () => {
    // create tests

    var char;
    // Changing up the code a bit
    // in order to update a record, we must make one
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
    it('Update 1 record from the database', done => {
        MarioChar.findOneAndUpdate(
            {
                name: 'Mario'
            },
            {
                name: 'Luigi'
            }
        ).then(() => {
            MarioChar.findById({ _id: char._id }).then(result => {
                assert(result.name === 'Luigi');
                done();
            });
        });
    });
});
