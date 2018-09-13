const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe tests
describe('Finding records', () => {
    // create tests

    // Changing up the code a bit
    // in order to find a record, we must make one
    // in connect.js, we drop the collection before each test
    // so we put this here to make sure we are adding something to the collection before our test runs
    beforeEach(done => {
        const char = new MarioChar({
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
    it('Finds 1 record from the database', done => {
        MarioChar.findOne({
            name: 'Mario'
        }).then(result => {
            assert(result.name === 'Mario');
            done();
        });
    });
});
